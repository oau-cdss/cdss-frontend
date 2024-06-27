"use client";

import React, { useEffect } from 'react';
import { useSession } from "../../../context/sessionContext";
import UpcomingScheduleComponent from "./upcomingScheduleComponent";
import UpcomingScheduleSkeletonLoader from "../LoadingPhase/upcomingScheduleSkeleton";

const ScheduleList = () => {
    const { sessionList, listOfSessions, loading  } = useSession();

    useEffect(() => {
        listOfSessions();
    }, [listOfSessions]);

    return (
        <div className="w-full shadow-md bg-gray-100 rounded-lg p-3">
            <p className="mb-4">Schedule</p>

            <div className="grid grid-cols-1 gap-y-3">
                {
                    loading ? (
                        <UpcomingScheduleSkeletonLoader count={4}/>
                    ) : (
                        sessionList.slice(0, 4).map((schedule, i) => (
                            <UpcomingScheduleComponent 
                                key={i}
                                name={schedule.patient.fullName}
                                time={schedule.scheduledTime}
                            />
                        ))
                    )
                }
            </div>
        </div>
    );
}

export default ScheduleList;
