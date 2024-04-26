import Image from "next/image";

const ClinicianNavbar = () => {
    return (
        <div className="flex justify-between py-6">
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
                <input type="text" placeholder="Search" className="px-5 py-4 rounded-md shadow-md"/>
            </div>

            <div>
            
            </div>

            <div className=" flex p-3 border border-[#6761ff] rounded-md">
                <Image src="/clinician-img.png" alt="clinician-img" width={30} height={30}/>
                <p className="ml-3 text-[#03021b] font-semibold text-base">Shaun</p>
            </div>
            </div>

            

        </div>
    )
}
export default ClinicianNavbar;