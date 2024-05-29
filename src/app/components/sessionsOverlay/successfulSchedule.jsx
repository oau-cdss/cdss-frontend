import Image from "next/image";

const SuccessfulSchedule = () => {
    return (
        <div className="py-8 flex flex-col items-center">
        <Image src="/succesful-schedule-img.png" alt="successful schedule" width={100} height={60}/>
        <div>
            <p>
            Session Created Successfully
            </p>
            <p>
            Awaiting Patient’s responses
            </p>
        </div>

        </div>
    )
}
export default SuccessfulSchedule;