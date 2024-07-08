"use client";

import React, { useEffect } from 'react';
import { format } from "date-fns";
import { useSchedule } from "../../../context/scheduleContext";
import Link from "next/link";

const UpcomingScheduleComponent = ({ name, time }) => {
    const { patientInitials, setPatientInitials } = useSchedule();

    useEffect(() => {
        const words = name.split(" ");
        setPatientInitials(words.map(word => word[0]).join(''));
    }, [name, setPatientInitials]);

    const formattedDate = format(time, "MMMM dd, yyyy");
    const formattedTime = format(time, "h:mm a");

    return (
        <div className="bg-[#fff] shadow-sm rounded-lg p-4">
            <div className="flex items-center">
                <div className='mr-2 w-9 h-9 rounded-full border border-[#6761ff] flex items-center justify-center '>
                    <p>{patientInitials}</p>
                </div>
                <div className="w-full ml-3">
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex flex-col">
                            <p className="font-semibold text-base">{name}</p>
                            <div className="flex justify-between">
                            <p className="font-normal text-sm text-gray-400">{formattedDate}</p>
                            <p className="font-normal text-sm text-gray-400 ml-2">{formattedTime}</p>
                            </div>
                        </div>
                        <Link href="/sessions">
                            <p className="text-[#1e59cf] underline text-base font-semibold text-right">
                                See details
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingScheduleComponent;
