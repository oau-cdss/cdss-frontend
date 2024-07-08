"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [startSession, setStartSession] = useState(false);
  const [illnessType, setIllnessType] = useState("Suspected Arthritis");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [message, setMessage] = useState("");
  const [steps, setSteps] = useState(1);
  const [supportedRegionList, setSupportedRegionList] = useState([]);
  const [regionId, setRegionId] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [successfulSchedule, setSuccessfulSchedule] = useState(false);
  const [loading, setLoading] = useState(true);

  const formattedDate = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`;

  const [hour, minute, second] = selectedTime.split(':');
  const formattedTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second || '00').padStart(2, '0')}`;

  const scheduledFormattedTime = new Date(`${formattedDate}T${formattedTime}`).toLocaleTimeString('en-GB', { hour12: false });
  const scheduledTime = `${formattedDate}T${scheduledFormattedTime}`;

  const listOfSupportedRegions = async () => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      console.error('No auth token found in localStorage');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/questions/supported-regions`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSupportedRegionList(data.payload.regions);
      } else {
        const errorData = await response.json();
        setMessage(errorData.message);
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    listOfSupportedRegions();
  }, []);

  return (
    <SessionContext.Provider value={{
      startSession, setStartSession,
      illnessType, setIllnessType,
      selectedDate, setSelectedDate,
      selectedMonth, setSelectedMonth,
      selectedYear, setSelectedYear,
      selectedTime, setSelectedTime,
      message, setMessage,
      steps, setSteps,
      supportedRegionList, setSupportedRegionList,
      regionId, setRegionId,
      patientEmail, setPatientEmail,
      successfulSchedule, setSuccessfulSchedule,
      loading, setLoading,
      listOfSupportedRegions
    }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
};
