"use client";

import { useSession } from "../../../../context/sessionContext";
import Image from "next/image";

const ClinicianSessionsList = ({ img, altTitle, type,  sessionDate, patientName, }) => {
    const { setStartSession, setIllnessType} = useSession();

    return (
        <div
            className="bg-[#f9f9f9] rounded-lg shadow-md w-full py-8 px-12 lg:col-span-1 flex justify-between"
            onClick={() => {
                setStartSession(true)
                setIllnessType(title)}}
        >
            <div className="flex lg:flex-col justify-center items-center lg:w-24">
                <Image src={img} alt={altTitle} width={60} height={60} />
                <p className="text-base text-center font-bold text-[#03021b] mt-5">{type}</p>
            </div>
            <div>
                <p>{sessionDate}</p>
            </div>
            <div>
                {patientName}
            </div>
        </div>
    );
};

export default ClinicianSessionsList;
