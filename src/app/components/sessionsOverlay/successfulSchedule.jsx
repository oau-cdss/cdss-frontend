import Image from "next/image";
import { useSchedule } from "../../../context/ScheduleContext";
//import { Link } from "react-router-dom";

const SuccessfulSchedule = () => {
    const { successfulSchedule } = useSchedule()
    return (
        <>
        {successfulSchedule && <div className="py-8 flex flex-col items-center">
        <Image src="/succesful-schedule-img.png" alt="successful schedule" width={100} height={60}/>
        <div>
            <p>
            Session Created Successfully
            </p>
            <p>
            Awaiting Patient’s responses
            </p>
        </div>

        {/* <Link href="/sessions"> */}
           <button 
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              type="submit">
                View Session
            </button>
        {/* </Link> */}

        </div>}
                  </>
    )
}
export default SuccessfulSchedule;