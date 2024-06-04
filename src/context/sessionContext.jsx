"use client";

import React, { createContext, useContext, useState } from "react";

// Create a context for the session state
const SessionContext = createContext();

// Provider component to wrap around the parts of your app that need access to the session state
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
    const [sessionList, setSessionList] = useState([]);
    const [regionId, setRegionId] = useState("");
    const [patientEmail, setpatientEmail] = useState("");
    const [successfulSchedule, setSuccessfulSchedule] = useState(false);

    // Ensure that date components are properly formatted
    const formattedDate = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`;
    
    // Ensure that time components are properly formatted
    const [hour, minute, second] = selectedTime.split(':');
    const formattedTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second || '00').padStart(2, '0')}`;
    
    const scheduledFormattedTime = new Date(`${formattedDate}T${formattedTime}`).toLocaleTimeString('en-GB', { hour12: false });
    const scheduledTime = `${formattedDate}T${scheduledFormattedTime}`

    return (
        <SessionContext.Provider value={{
            startSession, setStartSession,
            illnessType, setIllnessType,
            selectedDate, setSelectedDate,
            selectedMonth, setSelectedMonth,
            selectedYear, setSelectedYear,
            selectedTime, setSelectedTime,
            message,
            steps, setSteps,
            supportedRegionList, setSupportedRegionList,
            sessionList, setSessionList,
            regionId, setRegionId,
            patientEmail, setpatientEmail, 
            scheduledTime,
            successfulSchedule, setSuccessfulSchedule
        }}>
            {children}
        </SessionContext.Provider>
    );
};

// Custom hook to use the session context
export const useSession = () => {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error("useSession must be used within a SessionProvider");
    }
    return context;
};


