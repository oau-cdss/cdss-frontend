"use client";

import { useSession } from '../../../context/sessionContext';
import Image from "next/image";

const SessionDiv = ({ img, altTitle, title, regionId }) => {
    const { setStartSession, setIllnessType, setRegionId} = useSession();

    return (
        <div
            className="bg-[#f9f9f9] rounded-lg shadow-md w-auto py-8 px-12 lg:col-span-1 flex justify-center"
            onClick={() => {
                setStartSession(true)
                setIllnessType(title)
            setRegionId(regionId)
           }}
        >
            <div className="flex lg:flex-col justify-center items-center lg:w-24">
                <Image src={img} alt={altTitle} width={60} height={60} />
                <p className="text-base text-center font-bold text-[#03021b] mt-5">{title}</p>
            </div>
        </div>
    );
};

export default SessionDiv;
