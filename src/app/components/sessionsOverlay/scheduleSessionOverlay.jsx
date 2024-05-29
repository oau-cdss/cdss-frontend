"use client";

import { useState } from "react";
import { useSession } from "../../../context/sessionContext";
import Overlay from "./overlay";
import PatientDetails from "./patientDetails";
import ScheduledTime from "./scheduledTime";
import SuccessfulSchedule from "./successfulSchedule";

const ScheduleSessionOverlay = () => {
    const { startSession, setStartSession, ScheduleSession, steps, setSteps

     } = useSession();
   

    return (
        <>
            {startSession && (
                <Overlay>
                    <div className="bg-[#ffff] py-8 pb-2 px-5 rounded-xl h-auto mx-3 w-full md:w-1/2 z-40">
                        <div 
                            className="flex justify-end items-end"
                            onClick={() => setStartSession(false)}
                        >
                            <p>x</p>
                        </div>
                        {steps === 1 && <PatientDetails />}
                        {steps === 2 && <ScheduledTime />}
                        {steps === 3 && <SuccessfulSchedule />}

                       {steps === 1 && <div className="flex justify-between items-center">
                            <button 
                                className="blue-btn mt-20"
                                type="button"
                                onClick={() => {
                                    if (steps > 1 && steps < 4) setSteps(steps - 1);
                                }}
                            >
                                &larr;
                            </button>

                            <button 
                                className="blue-btn mt-20"
                                type="button"
                                onClick={() => {
                                    if (steps <= 2) setSteps(steps + 1);
                                }}
                            >
                                &rarr;
                            </button>
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
                        } */}
                    </div>
                </Overlay>
            )}
        </>
    );
};

export default ScheduleSessionOverlay;
