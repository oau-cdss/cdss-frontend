"use client";

import React, { createContext, useContext, useState } from "react"

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [sessionList, setSessionList] = useState([]);
  const [patientList, setPatientList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [id, setId] = useState('');
  const [status, setStatus] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [clinicianId, setClinicianId] = useState('');
  const [continueSession, setContinueSession] = useState(false)
  const [sessionId, setSessionId] = useState("")
  const [currentSessionId, setCurrentSessionId] = useState("")
  const [sessionQuestions, setSessionQuestions] = useState(" ")
  const [patientInitials, setPatientInitials] = useState("")
  const [patientName, setPatientName] = useState("")

 
    const listOfSessions = async () => {
      const url = new URL(`${process.env.NEXT_PUBLIC_ROOT_URL}/sessions/list`);
      const token = localStorage.getItem('authToken');

      const params = { page, id, status, patientEmail, clinicianId };
      Object.keys(params).forEach(key => {
        if (params[key]) {
          url.searchParams.append(key, params[key]);
        }
      });

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data.payload)
          setSessionList(data.payload.sessions);
          setCurrentSessionId(data.payload.id)
          sessionList.map((list) => (
            setPatientName(list.patient.fullName)
          ))
        

        } else {
          const errorData = await response.json();
          console.error('Error:', errorData);
        }
      } catch (error) {
        console.error('Error', error)
      } finally {
        setLoading(false);
      }
    };

    const listOfPatients = async () => {
      const url = new URL(`${process.env.NEXT_PUBLIC_ROOT_URL}/patients/list`);
      const token = localStorage.getItem('authToken');

      const params = { page, id};
      Object.keys(params).forEach(key => {
        if (params[key]) {
          url.searchParams.append(key, params[key]);
        }
      });

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data.payload)
          setPatientList(data.payload.patients)
        
        

        } else {
          const errorData = await response.json();
          console.error('Error:', errorData);
        }
      } catch (error) {
        console.error('Error', error);
        alert(`Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };


    
 

  return (
    <SessionContext.Provider value={{
      page, setPage, id, setId,
       status, setStatus, patientEmail, setPatientEmail,
       patientList, setPatientList,
        clinicianId, setClinicianId,
         loading, setLoading,
         sessionList, setSessionList,
         continueSession, setContinueSession,
         sessionId, setSessionId,
         currentSessionId, setCurrentSessionId,
         sessionQuestions, setSessionQuestions, listOfSessions,
         patientInitials, setPatientInitials,
         patientName, setPatientName, listOfPatients
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
