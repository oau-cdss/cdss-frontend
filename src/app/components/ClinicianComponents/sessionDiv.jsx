import Image from "next/image";

const SessionDiv = ({img, altTitle, title}) => {
    return (
        <div className="bg-[#f9f9f9] rounded-lg shadow-md w-auto p-5 col-span-1">
            <div className="flex flex-col justify-center items-center w-24">
                <Image src={img} alt={altTitle} width={60} height={60}/>
                <p className="text-base text-center font-bold text-[#03021b] mt-5">{title}</p>
            </div>
        </div>
    )
}
export default SessionDiv;