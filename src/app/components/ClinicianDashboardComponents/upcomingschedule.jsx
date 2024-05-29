import Image from "next/image";

const UpcomingSchedule = () => {
    return (
        <div className='shadow-md rounded-lg col-span-2 p-5 '>
            <p className="mb-4">Upcoming Schedule</p>

            <div className="flex">
                <div className="flex items-start mr-5">

                <Image 
                   src="/clinician-img.png" alt="clinician" width={40} height={40}
                   className=""/>
                </div>
                <div className=" w-full ml-3">

                <div className="flex justify-between mb-2">
                    <div className="flex flex-col">
                         <p>Shaun Carter</p>
                         <p>26 years old</p>
                    </div>

                    <p className='text-[#1e59cf] underline text-base font-semibold text-right'>See details</p>

                </div>

                <div>
                    <p>Time</p>
                    <p>09: 00am - 09: 45 am</p>
                </div>

                </div>
            </div>

        </div>
    )
}
export default UpcomingSchedule;