import Image from "next/image";

const ClinicianDiv = ({status, name, AreaOfSpecialization}) => {
    return (
        <>
          <Image 
             src="/clinician-photo.png" alt="clinician photo" width={60} height={50}
             className="w-full"/>
          <div className="p-4">
            <div className="flex items-center">
              <div 
                className={`w-2 h-2  rounded-full 
                ${status === "Away" && "bg-[#ddbc0d]"}
                ${status === "Online" && "bg-[#31b104]"}
                ${status === "Offline" && "bg-[#ed2626]"}
                `}></div>
              <p className={`ml-3 text-base
                ${status === "Away" && "text-[#ddbc0d]"}
                ${status === "Online" && "text-[#31b104]"}
                ${status === "Offline" && "text-[#ed2626]"}
              `}>{status}</p>

            </div>

            <p className="text-base">{name}</p>
            <p>{AreaOfSpecialization}</p>
          </div>

        </>
    )
}
export default ClinicianDiv;