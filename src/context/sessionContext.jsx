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
    const [supportedRegionList, setSupportedRegionList] = useState([])
    const [sessionList, setSessionList] = useState([])

    const patientId = "6615912a967614ccf6f995b0";
    const scheduledTime = `${selectedYear}-${selectedMonth}-${selectedDate}T${selectedTime}`;

    const ScheduleSession = async () => {
        const token = localStorage.getItem('authToken');
        const payload = { patientId, type: illnessType, scheduledTime };

        console.log("Payload to be sent:", payload);

        try {
            const response = await fetch('https://cdss-api.fly.dev/v1/sessions/schedule', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('API response data:', data);

                if (data && data.payload && data.payload.clinician) {
                    const type = data.payload.type;
                    const fullName = data.payload.clinician.fullName;
                    const scheduledTime = data.payload.scheduledTime;
                    alert(`Type: ${type}\nClinician: ${fullName}\nScheduled Time: ${scheduledTime}`);
                } else {
                    setMessage("Invalid response structure from the server.");
                    console.error('Invalid response structure:', data);
                }
            } else {
                const errorMessage = await response.text();
                setMessage(errorMessage.slice(12, -2));
            }
        } catch (error) {
            console.error('Error', error);
            setMessage('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <SessionContext.Provider value={{
            startSession, setStartSession,
            illnessType, setIllnessType,
            selectedDate, setSelectedDate,
            selectedMonth, setSelectedMonth,
            selectedYear, setSelectedYear,
            selectedTime, setSelectedTime,
            message, ScheduleSession,
            steps, setSteps,
            supportedRegionList, setSupportedRegionList,
            sessionList, setSessionList
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
