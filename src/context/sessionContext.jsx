"use client";

import React, { createContext, useContext, useState } from "react"

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [sessionList, setSessionList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [id, setId] = useState('');
  const [status, setStatus] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [clinicianId, setClinicianId] = useState('');
  const [continueSession, setContinueSession] = useState(false)
  const [sessionId, setSessionId] = useState("")
  const [currentSessionId, setCurrentSessionId] = useState("")
  const [sessionQuestions, setSessionQuestions] = useState([])

 

  return (
    <SessionContext.Provider value={{
      page, setPage, id, setId,
       status, setStatus, patientEmail, setPatientEmail,
        clinicianId, setClinicianId,
         loading, setLoading,
         sessionList, setSessionList,
         continueSession, setContinueSession,
         sessionId, setSessionId,
         currentSessionId, setCurrentSessionId,
         sessionQuestions, setSessionQuestions
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
