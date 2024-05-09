"use client"

import Image from "next/image";
import { useSession } from "../../../context/sessionContext";
import AgeOverlay from "../clinicianSesion/ageOverlay"

const SessionDiv = ({img, altTitle, title}) => {
   const {setStartSession} = useSession()
    const selectSession = () => {
        setStartSession(true)
    }
    return (
        <>
        <div
        onClick={selectSession} 
        className="bg-[#f9f9f9] rounded-lg shadow-md w-auto py-8 px-12 lg:col-span-1 flex justify-center">
            <div className="flex lg:flex-col justify-center items-center lg:w-24">
                <Image src={img} alt={altTitle} width={60} height={60}/>
                <p className="text-base text-center font-bold text-[#03021b] mt-5">{title}</p>
            </div>
        </div>
        <AgeOverlay/>
        </>
    )
}
export default SessionDiv;