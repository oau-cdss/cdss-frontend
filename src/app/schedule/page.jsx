"use client";

import { useEffect, useState } from "react";
import { useSession, SessionProvider } from "../../context/sessionContext";
import SessionDiv from "../components/ClinicianDashboardComponents/sessionDiv";
import ScheduleSessionOverlay from "../components/sessionsOverlay/scheduleSessionOverlay";
import ClinicianSideBar from "../components/ClinicianDashboardComponents/clinicianSideBar";
import ClinicianNavbar from "../components/ClinicianDashboardComponents/clinicianNavbar";

const Schedule = () => {
    const { supportedRegionList, setSupportedRegionList } = useSession();
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("")

    const ListOfSupportedRegion = async () => {
      
        const token = localStorage.getItem('authToken');

        if (!token) {
            console.error('No auth token found in localStorage');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`https://cdss-api.fly.dev/v1/questions/supported-regions`, {
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
                setMessage(errorData.message);
            }
        } catch (error) {
            setMessage(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        ListOfSupportedRegion();
    }, []); 

    return (
        <div className='flex lg:grid grid-cols-6'>
            <ClinicianSideBar /> 
            <div className='col-span-5 w-full'>
                <ClinicianNavbar />
                <div className="bg-gray-100 w-full px-6 py-4">
                    <p className="text-lg font-semibold">Choose a session</p>
                    {loading ? ( 
                        // <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-16 gap-x-3 py-6">
                        //     <div className="bg-[#f9f9f9] rounded-lg shadow-md w-auto py-8 px-12 lg:col-span-1 flex justify-center">
                        //         <p className="text-red-500 text-sm">{message}</p>
                        //         <div className="spinner"></div>
                        //     </div>
                        // </div>
                        <p>Loading...</p>
                    ) : (
                        <div className='grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-16 gap-x-3 py-6'>
                            {
                                supportedRegionList.map((list, i) => (
                                    <SessionDiv key={i} img={list.iconUrl} altTitle={list.name} title={list.name} regionId={list.id}/>
                                ))
                            }
                        </div>
                    )}
                </div>
            </div>
            <ScheduleSessionOverlay />
        </div>
    );
};

const ScheduleWithProvider = () => (
    <SessionProvider>
        <Schedule />
    </SessionProvider>
);

export default ScheduleWithProvider;
