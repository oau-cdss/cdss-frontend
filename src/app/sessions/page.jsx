"use client";

import React, { useEffect } from 'react';
import { ScheduleProvider } from "../../context/ScheduleContext";
import ClinicianSideBar from "../components/ClinicianDashboardComponents/clinicianSideBar";
import ClinicianNavbar from "../components/ClinicianDashboardComponents/clinicianNavbar";
import ClinicianSessionsList from "../components/ClinicianDashboardComponents/ClinicianSessions/clinicianSessionsList";
import SessionQuestion from "../components/ClinicianDashboardComponents/ClinicianSessions/sessionQuestions";
import { useSession, SessionProvider } from '../../context/sessionContext';

const Sessions = () => {
  const { page, id, status, patientEmail, clinicianId, loading,
     sessionList, setSessionList, setLoading, continueSession, setSessionId } = useSession();

  useEffect(() => {
    const listOfSessions = async () => {
      const url = new URL('https://cdss-api.fly.dev/v1/sessions/list');
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
          setSessionList(data.payload.sessions);
          setSessionId(data.payload.id)
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

    listOfSessions();
  }, [page, id, status, patientEmail, clinicianId, setLoading, setSessionList]);

  return (
    <div className="flex lg:grid grid-cols-6">
      <ClinicianSideBar />
      <div className="col-span-5">
        <ClinicianNavbar />
        <div className="px-6 py-6">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="bg-gray-100 grid grid-cols-1 place-items-center gap-y-6 bg-[#0f0f0f0]">
              {continueSession ? (
                <div>

                <SessionQuestion />
                </div>
              ) : (
                sessionList.map((session, i) => (
                  <ClinicianSessionsList
                    key={i}
                    img="/leg.png"
                    // img={session.region.iconUrl}
                    alt={session.type}
                    type={session.type}
                    sessionDate={session.scheduledTime}
                    patientName={session.patient.fullName}
                    status={session.status}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SessionWithProvider = () => (
  <ScheduleProvider>
    <SessionProvider>
      <Sessions />
    </SessionProvider>
  </ScheduleProvider>
);

export default SessionWithProvider;
