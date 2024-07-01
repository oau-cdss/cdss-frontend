"use client"
import { useSchedule } from "../../../context/ScheduleContext";
import Overlay from "./overlay";

const AgeOverlay = () => {
   // const { permissionBtn, editPermission, selectedHour, setSelectedHour, setSaveSelectedHour, successNotification, setSuccessNotification } = useSettings();
   const {startSession, setStartSession} = useSchedule
   ()

    return (
        <>
          {startSession &&
                <Overlay>
                    
                    <div className="bg-[#ffff] py-8 pb-2 px-5 rounded-xl h-auto mx-3 w-full md:w-1/2 z-40">
                        <div 
                          className="flex justify-end items-end"
                          onClick={
                            () => {
                                 setStartSession(false)
                            }
                          }>
                          <p>x</p>  
                        </div>
                        <div className="py-8 flex flex-col items-center">
                       <h3 className="text-center">How old are you?</h3>
                       <p className="text-gray-500 text-base font-bold text-center">Please provide your age in the text box below</p>

                       <div>
                        <textarea 
                          rows={5} cols={50}
                          placeholder="Enter text..."
                          className="shadow-md focus:outline-none rounded-lg p-4 placeholder:text-gray-500 placeholder:text-lg placeholder:font-normal"/>
                       </div>
                    
                    <div className="flex justify-center">
                       <button 
                         className="blue-btn mt-20"
                         type="button">
                         Start Session
                        </button>
                    </div>
                          </div>

                    </div>
                </Overlay>
            }
        </>
    );
};

export default AgeOverlay;
