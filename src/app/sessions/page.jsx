"use client";

import React, { useEffect, useCallback } from 'react';
import ClinicianSideBar from "../components/ClinicianDashboardComponents/clinicianSideBar";
import ClinicianNavbar from "../components/ClinicianDashboardComponents/clinicianNavbar";
import ClinicianSessionsList from "../components/ClinicianDashboardComponents/ClinicianSessions/clinicianSessionsList";
import SessionQuestion from "../components/ClinicianDashboardComponents/ClinicianSessions/sessionQuestions";
import { useSchedule, ScheduleProvider } from '../../context/scheduleContext';
import SessionListSkeletonLoader from '../components/LoadingPhase/sessionListSkeleton';

const Sessions = () => {
  const {
    page, id, status, patientEmail, clinicianId, loading, sessionList, listOfSessions,
    setSessionList, setLoading, setContinueSession, setCurrentSessionId, continueSession,
    setPatientName, setCurrentRegion, currentRegion, regionImage, setRegionImage, supportedRegionList
  } = useSchedule();

  useEffect(() => {
    listOfSessions();
  }, [listOfSessions]);

  const handleSessionClick = (session) => {
    setPatientName(session.patient.fullName);
    setContinueSession(true);
    setCurrentSessionId(session.id);
    setCurrentRegion(session.region.name);
    setRegionImage(session.region.iconUrl);
    localStorage.setItem("savedCurrentRegion", session.region.name);
  };

  return (
    <div className="flex lg:grid grid-cols-6">
      <ClinicianSideBar />
      <div className="col-span-5 overflow-y-scroll">
        <ClinicianNavbar currentRegion={currentRegion} />
        <div className="px-6 py-6">
          {loading ? (
             <SessionListSkeletonLoader count={5}/>
          ) : (
            <div className="bg-gray-100 grid grid-cols-1 place-items-center gap-y-6 bg-[#0f0f0f0]">
              {continueSession ? (
                <SessionQuestion />
              ) : (
                sessionList.map((session) => (
                  <ClinicianSessionsList
                    key={session.id}
                    img={session.region.iconUrl}
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
    <Sessions />
  </ScheduleProvider>
);

export default SessionWithProvider;
