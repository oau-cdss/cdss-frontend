"use client";

import React, { useEffect } from 'react';
import { ScheduleProvider } from "../../context/ScheduleContext";
import ClinicianSideBar from "../components/ClinicianDashboardComponents/clinicianSideBar";
import ClinicianNavbar from "../components/ClinicianDashboardComponents/clinicianNavbar";
import ClinicianSessionsList from "../components/ClinicianDashboardComponents/ClinicianSessions/clinicianSessionsList";
import SessionQuestion from "../components/ClinicianDashboardComponents/ClinicianSessions/sessionQuestions";
import { useSession, SessionProvider } from '../../context/sessionContext';

const Sessions = () => {
  const {
    page, id, status, patientEmail, clinicianId, loading, sessionList, listOfSessions,
    setSessionList, setLoading, setContinueSession, setCurrentSessionId, continueSession, setSessionId,
    setPatientName
  } = useSession();

  useEffect(() => {
    listOfSessions();
  }, [listOfSessions, page, id, status, patientEmail, clinicianId, setLoading, setSessionList]);

  const handleSessionClick = (session) => {
    setPatientName(session.patient.fullName);
    setContinueSession(true);
    setCurrentSessionId(session.id);
  };

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
                <SessionQuestion />
              ) : (
                sessionList.map((session) => (
                  <ClinicianSessionsList
                    key={session.id}
                    img="/leg.png"
                    alt={session.type}
                    type={session.type}
                    sessionDate={session.scheduledTime}
                    patientName={session.patient.fullName}
                    status={session.status}
                    onClick={() => handleSessionClick(session)}
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
