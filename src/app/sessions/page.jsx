"use client";

import { SessionProvider, useSession } from "../../context/sessionContext";
import ClinicianSideBar from "../components/ClinicianDashboardComponents/clinicianSideBar";
import ClinicianNavbar from "../components/ClinicianDashboardComponents/clinicianNavbar";
import ClinicianSessionsList from "../components/ClinicianDashboardComponents/ClinicianSessions/clinicianSessionsList";
import { useEffect, useState } from "react";

const Sessions = ({ page = 1, id = '', status = '', patientEmail = '', clinicianId = '' }) => {
  const { sessionList, setSessionList } = useSession();
  const [loading, setLoading] = useState(true);

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
        console.log(data)
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
  }, [page, id, status, patientEmail, clinicianId]);

  return (
    <div className="flex lg:grid grid-cols-6">
      <ClinicianSideBar />
      <div className="col-span-5">
        <ClinicianNavbar />
        <div className="px-6  py-6">    
        {loading ? (
          <div>
            
          </div>
        ) : (
          <div className="bg-gray-100 grid grid-cols-1 place-items-center gap-y-6 bg-[#0f0f0f0]">
            {sessionList.map((session, i) => (
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
            ))}
          </div>
        )}
         </div>
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
