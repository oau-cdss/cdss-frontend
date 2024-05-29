"use client";

import { SessionProvider, useSession } from "../../context/sessionContext";
import ClinicianSideBar from "../components/ClinicianDashboardComponents/clinicianSideBar";
import ClinicianNavbar from "../components/ClinicianDashboardComponents/clinicianNavbar";
import ClinicianSessionsList from "../components/ClinicianDashboardComponents/ClinicianSessions/clinicianSessionsList";
import { useEffect, useState } from "react";

const Sessions = ({ page = 1, id = '', status = '', patientId = '', clinicianId = '' }) => {
  const { sessionList, setSessionList } = useSession();
  const [loading, setLoading] = useState(true);

  const listOfSessions = async () => {
    const url = new URL('https://cdss-api.fly.dev/v1/sessions/list');
    const token = localStorage.getItem('authToken');

    // Add query parameters to the URL
    const params = { page, id, status, patientId, clinicianId };
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
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error', error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    listOfSessions();
  }, [page, id, status, patientId, clinicianId]);  // Re-run the effect if any parameter changes

  return (
    <div className="flex lg:grid grid-cols-6">
      <ClinicianSideBar />
      <div className="px-2 lg:px-7 col-span-5">
        <ClinicianNavbar />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {sessionList.map((session, i) => (
              <ClinicianSessionsList
                key={session.id}
                img="/leg.png"
                alt={session.type}
                type={session.type}
                sessionDate={session.scheduledTime}
                patientName={session.patient.fullName}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const SessionWithProvider = () => (
  <SessionProvider>
    <Sessions />
  </SessionProvider>
);

export default SessionWithProvider;
