import Image from "next/image";
import { FaBell } from "react-icons/fa";

const ClinicianNavbar = () => {
    return (
        <div className="flex-col lg:flex lg:flex-row justify-between py-6">
            <div>
                <p className="font-bold text-2xl">
                    Welcome
                    <span className="text-[#1e59cf]"> Dr Shaun!</span>
                </p>
            </div>

            <div className="flex items-center">
            <div>
                <div>
                    {/* <CiSearch/> */}
                    
                </div>
                <input type="text" placeholder="Search" className="px-5 py-4 rounded-md shadow-md "/>
            </div>

            <div className="mx-5 text-gray-500 relative">
              <FaBell size={30}/>
              <div className="w-2 h-2 rounded-full bg-[#1e59cf] absolute top-0.5 right-0.5"></div>
            </div>

            <div className=" flex p-3 border border-[#6761ff] rounded-md">
                <Image src="/clinician-img.png" alt="clinician-img" width={35} height={35}/>
                <p className="ml-3 text-[#03021b] font-semibold text-base">Shaun</p>
            </div>
            </div>

            

        </div>
    )
}
export default ClinicianNavbar;