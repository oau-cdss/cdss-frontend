"use client";

import { useState } from "react";
import { useSchedule } from "../../../context/ScheduleContext";
import Overlay from "./overlay";
import PatientDetails from "./patientDetails";
import ScheduledTime from "./scheduledTime";
import SuccessfulSchedule from "./successfulSchedule";
import { IoClose } from "react-icons/io5";

const ScheduleSessionOverlay = () => {
    const { startSession, setStartSession, ScheduleSession, steps, setSteps

     } = useSchedule();
   

    return (
        <>
            {startSession && (
                <Overlay>
                    <div className="bg-[#ffff] py-8 pb-5 px-5 rounded-xl h-auto mx-3 w-full md:w-1/2 z-40">
                        <div 
                            className="flex justify-end items-end"
                            onClick={() => setStartSession(false)}
                        >
                           <IoClose size={20}/>
                        </div>
                        {steps === 1 && <PatientDetails />}
                        {steps === 2 && <ScheduledTime />}
                        {steps === 3 && <SuccessfulSchedule />}

                       {steps === 1 && <div className="flex justify-between items-center px-6">
                          <div className="flex flex-col items-center gap-y-2 text-gray-400">
                            <button 
                                className="text-3xl font-bold bg-indigo-100 rounded-full w-[36px] h-[36px]"
                                type="button"
                                onClick={() => {
                                    if (steps > 1 && steps < 4) setSteps(steps - 1);
                                }}
                                >
                                &larr;
                            </button>
                            <p>Previous</p>
                                </div>

                      <div className="flex flex-col items-center gap-y-2 text-[#1e59cf]">

                            <button 
                                className=" text-3xl font-bold bg-indigo-100 rounded-full  w-[36px] h-[36px] "
                                type="button"
                                onClick={() => {
                                    if (steps <= 2) setSteps(steps + 1);
                                }}
                                >
                                &rarr;
                            </button>
                            <p className="text-base">Next</p>
                                </div>
                        </div>}

                        {/* {
                            steps === 2 &&
                            <div 
                              className="flex flex-row justify-content items-center"
                              onClick={() => {
                                if (steps === 2) {
                                    setSteps(3);
                                   
                              }}}>
                                 <button 
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                    type="submit">
                    Start Session
                </button>

                            </div>
                        }  */}
                    </div>
                </Overlay>
            )}
        </>
    );
};

export default ScheduleSessionOverlay;
