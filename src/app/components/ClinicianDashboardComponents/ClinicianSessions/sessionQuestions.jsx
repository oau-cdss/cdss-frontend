"use client"

import React, { useEffect, useState } from 'react';
import { useSession } from "../../../../context/sessionContext";
import ClinicianNavbar from "../clinicianNavbar";

const SessionQuestion = () => {
  const { continueSession, sessionId, sessionQuestions, setSessionQuestions, currentSessionId } = useSession();
  const [sessionList, setSessionList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const listOfSessions = async () => {
      const url = new URL(`${process.env.NEXT_PUBLIC_ROOT_URL}/sessions/${currentSessionId}/resume`);
      const token = localStorage.getItem('authToken');
      console.log(token)
      const params = { currentSessionId };
    
      try {
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setSessionQuestions(data.payload);
        } else {
          const errorData = await response.json();
          console.error('Error:', errorData);
        }
      } catch (error) {
        console.error('Error', error);
        
      } finally {
        setLoading(false);
      }
    };

    listOfSessions();
  }, [currentSessionId]);

  return (
    <>
      {continueSession && (
        <div className="col-span-5 fixed top-0 left-0 w-full h-full bg-[#fff] overflow-hidden z-40">
          <ClinicianNavbar />

          <div className="flex items-center justify-center">
            <div className="px-6 py-6 bg-gray-100 rounded-lg shadow-md">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <ul>
                  {/* {sessionQuestions.map(questions => (
                    <div key={questions.id}>
                        <p>{questions.text}</p>
                    </div>
                  ))} */}
                  {sessionQuestions.kind}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SessionQuestion;
