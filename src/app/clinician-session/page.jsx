"use client"

import { SessionProvider } from "../../context/sessionContext";
import ClinicianNavbar from "../components/ClinicianDashboardComponents/clinicianNavbar";
import ClinicianSideBar from "../components/ClinicianDashboardComponents/clinicianSideBar";
import SessionDiv from "../components/ClinicianDashboardComponents/sessionDiv";

//import SessionProvider from "../../src/context/sessionContext"

const ClinicianSession = () => {
    return (
        <SessionProvider>

        <div className=''>
        <div className='fixed top-0 left-0 h-100'>
        <ClinicianSideBar/>
      </div>
  
      <div className='lg:ml-56 px-0 mr-0'>
        <ClinicianNavbar/>

        <div className="bg-gray-100 p-5 rounded-lg">
            <p className='text-gray-500 text-base py-2'>Choose a session</p>
            <div className="grid grid-cols-6 gap-6">

            <SessionDiv img="/leg.png" alt="Tendinitis" title="Tendinitis"/>
            <SessionDiv img="/hand.png" alt="carpal tunnel syndrome" title="carpal tunnel syndrome"/>
            <SessionDiv img="/knee.png" alt="Osteoarthritis" title="Osteoarthritis"/>
            <SessionDiv img="/leg.png" alt="Tendinitis" title="Tendinitis"/>
            <SessionDiv img="/hand.png" alt="carpal tunnel syndrome" title="carpal tunnel syndrome"/>
            <SessionDiv img="/knee.png" alt="Osteoarthritis" title="Osteoarthritis"/>
            <SessionDiv img="/leg.png" alt="Tendinitis" title="Tendinitis"/>
            <SessionDiv img="/hand.png" alt="carpal tunnel syndrome" title="carpal tunnel syndrome"/>
            <SessionDiv img="/knee.png" alt="Osteoarthritis" title="Osteoarthritis"/>
            <SessionDiv img="/leg.png" alt="Tendinitis" title="Tendinitis"/>
            <SessionDiv img="/hand.png" alt="carpal tunnel syndrome" title="carpal tunnel syndrome"/>
            <SessionDiv img="/knee.png" alt="Osteoarthritis" title="Osteoarthritis"/>
            </div>
        </div>
    </div>
    </div>
        </SessionProvider>
    )
}
export default ClinicianSession;