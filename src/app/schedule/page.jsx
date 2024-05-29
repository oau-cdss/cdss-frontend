"use client";

import { useEffect } from "react";
import { useSession, SessionProvider } from "../../context/sessionContext";
import SessionDiv from "../components/ClinicianDashboardComponents/sessionDiv";
import ScheduleSessionOverlay from "../components/sessionsOverlay/scheduleSessionOverlay";
import ClinicianSideBar from "../components/ClinicianDashboardComponents/clinicianSideBar";

const Schedule = () => {
    const {supportedRegionList, setSupportedRegionList } = useSession();
  
    const ListOfSupportedRegion = async () => {
        const url = new URL('https://cdss-api.fly.dev/v1/questions/supported-regions');
        const token = localStorage.getItem('authToken');

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
              
                setSupportedRegionList(data.payload.regions);
              
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error', error);
            alert(error);
        }
    }

    useEffect(() => {
        ListOfSupportedRegion();
    }, []); 

    return (
        <div className='flex lg:grid grid-cols-6'>
            <ClinicianSideBar /> 
            <div className='px-2 lg:px-7 col-span-5'>
                <div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-5 gap-x-3 py-6'>
                        {
                            supportedRegionList.map((list, i) => (
                                <SessionDiv key={i} img="/leg.png" altTitle={list.name} title={list.name}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <ScheduleSessionOverlay/>
        </div>
    );
}

const ScheduleWithProvider = () => (
    <SessionProvider>
        <Schedule />
    </SessionProvider>
);

export default ScheduleWithProvider;
