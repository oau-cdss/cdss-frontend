import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"
import ClinicianDiv from "../components/CliniciansComponent/clinicianDiv"
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

const Clinicians = () => {

    const ClinicianDetails = [
        {
            "name": "Dr. Amos Reja Sp. Pd",
            "AreaOfSpecialization": "Surgeon",
            "status": "Online"
        },
        {
            "name": "Dr. Amos Reja Sp. Pd",
            "AreaOfSpecialization": "Surgeon",
            "status": "Online"
        },
        {
            "name": "Dr. Amos Reja Sp. Pd",
            "AreaOfSpecialization": "Surgeon",
            "status": "Away"
        },
        {
            "name": "Dr. Amos Reja Sp. Pd",
            "AreaOfSpecialization": "Surgeon",
            "status": "Offline"
        },
        {
            "name": "Dr. Amos Reja Sp. Pd",
            "AreaOfSpecialization": "Surgeon",
            "status": "Online"
        },
        {
            "name": "Dr. Amos Reja Sp. Pd",
            "AreaOfSpecialization": "Surgeon",
            "status": "Online"
        },
        {
            "name": "Dr. Amos Reja Sp. Pd",
            "AreaOfSpecialization": "Surgeon",
            "status": "Away"
        },
        {
            "name": "Dr. Amos Reja Sp. Pd",
            "AreaOfSpecialization": "Surgeon",
            "status": "Offline"
        },
        {
            "name": "Dr. Amos Reja Sp. Pd",
            "AreaOfSpecialization": "Surgeon",
            "status": "Online"
        },
        {
            "name": "Dr. Amos Reja Sp. Pd",
            "AreaOfSpecialization": "Surgeon",
            "status": "Online"
        },
        {
            "name": "Dr. Amos Reja Sp. Pd",
            "AreaOfSpecialization": "Surgeon",
            "status": "Away"
        },
        {
            "name": "Dr. Amos Reja Sp. Pd",
            "AreaOfSpecialization": "Surgeon",
            "status": "Offline"
        },
        {
            "name": "Dr. Amos Reja Sp. Pd",
            "AreaOfSpecialization": "Surgeon",
            "status": "Online"
        },
        {
            "name": "Dr. Amos Reja Sp. Pd",
            "AreaOfSpecialization": "Surgeon",
            "status": "Online"
        },
        {
            "name": "Dr. Amos Reja Sp. Pd",
            "AreaOfSpecialization": "Surgeon",
            "status": "Away"
        },
        {
            "name": "Dr. Amos Reja Sp. Pd",
            "AreaOfSpecialization": "Surgeon",
            "status": "Offline"
        }
        ]
    return (
        <div className="relative">
            <Navbar/>
                <div className="w-1/4 lg:w-auto absolute hidden lg:block left-0 top-1/3 ">
                <Image src="/Vector.png" alt="vector" width={110} height={80} />
                </div>
            <div>
                <div className="flex flex-col  lg:flex-row lg:items-center justify-between lg:px-24 py-6">
                    <p className="text-start">Clinicians</p>

                    <div className="flex rounded-md shadow-md w-full lg:w-auto ">
                        <div className="bg-[#f8f8ff] pl-5 py-4  flex items-center outline-none w-auto mt-4 lg:mt-0">
                            <CiSearch size={25}/>
                        </div>
                    <input type="text" placeholder="Search doctor's name" className="bg-[#f8f8ff] pl-2 pr-5 py-4  outline-none w-full "/>
                </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-3 lg:px-24 ">
                 
                    {ClinicianDetails.map((details, index) => (
                        <div key={index} className="rounded-md border z-50">
                            <ClinicianDiv status={details.status} name={details.name} AreaOfSpecialization={details.AreaOfSpecialization}/>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>

        </div>
    )
}
export default Clinicians;