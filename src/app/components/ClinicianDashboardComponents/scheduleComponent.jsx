import Image from "next/image"

const ScheduleComponent = () => {
    return (
        <div className="bg-[#fff] shadow-sm rounded-lg p-4">
             <div className="flex items-center">
                <div classNmae="mr-4">

                <Image 
                   src="/clinician-img.png" alt="clinician" width={50} height={50}
                  />
                </div>
                <div className=" w-full ml-3">

                <div className="flex justify-between items-center mb-2">
                    <div className="flex flex-col">
                         <p>Shaun Carter</p>
                         <p>09: 00am - 09: 45 am</p>
                    </div>

                    <p className='text-[#1e59cf] underline text-base font-semibold text-right'>See details</p>

                </div>
                </div>

                </div>

        </div>
    )
}
export default ScheduleComponent