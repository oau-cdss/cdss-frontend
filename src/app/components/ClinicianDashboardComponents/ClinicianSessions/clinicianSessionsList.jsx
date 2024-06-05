"use client";

import Image from "next/image";
import { FiInfo } from "react-icons/fi";
import { useSession } from "../../../../context/sessionContext";

const ClinicianSessionsList = ({ img, altTitle, type,  sessionDate, patientName, status}) => {
    const { setContinueSession, setSessionId,  setCurrentSessionId} = useSession()
   

    return (
        <div
            className="bg-[#f9f9f9] rounded-lg shadow-md w-full py-5 px-5 lg:col-span-1 flex justify-between items-center"
           
        >
            <div className="flex lg:flex-col justify-center items-center ">
                <div className="w-[65px] h-[65px]  flex justify-center items-center rounded-full bg-[#6761FF1A]">
                <Image src={img} alt={altTitle} width={40} height={40} />
                </div>
                <p className="text-base text-center font-bold text-[#03021b] mt-5">{type}</p>
            </div>

            <div  className="flex flex-col gap-y-1">
                <p className="font-normal text-sm text-gray-400">
                    Session Date
                </p>
                <p className="font-semibold text-base text-gray-600">
                    {sessionDate}
                </p>
            </div>

            <div  className="flex flex-col gap-y-1">
                <p className="font-normal text-sm text-gray-400">
                    Session Date
                </p>
                <p className="font-semibold text-base text-gray-600">
                    {sessionDate}
                </p>
            </div>
            <div className="flex flex-col gap-y-1">
                <p className="font-normal text-sm text-gray-400">
                    Patient Name
                </p>
                <p className="font-semibold text-base text-gray-600">
                {patientName}
                </p>
            </div>

            <div>
                {
                    status === "PENDING" ? 
                    (
                        <div className="flex items-center">
                            <div className="text-[#b7af00]">

                            <FiInfo size={20}/>
                            </div>
                            <p className="text-base font-seminbold ml-2">Awaiting patient&apos;s response</p>
                        </div>

                    ) : 
                    (
                <button 
                       onClick={() => {
                        setContinueSession(true);
                        setCurrentSessionId(setSessionId)
                      
                       }}
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                        type="submit"
                    >
                        Continue Session
                    </button>

                    )
                }
            </div>
        </div>
    );
};

export default ClinicianSessionsList;
