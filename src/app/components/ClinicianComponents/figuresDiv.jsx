import Image from "next/image";

const FigureDiv = ({img, altTitle, title}) => {
    return (
        <div className="bg-[#f9f9f9] rounded-lg shadow-md w-44 p-5 mx-2">
            <div className="flex items-center">
                <Image src={img} alt={altTitle} width={60} height={60}/>
                <p className="text-xl font-bold text-[#03021b] ml-2">{title}</p>
            </div>

            <div className="mt-20">
                <p className="font-extrabold text-4xl text-gray-400">212</p>
            </div>

        </div>
    )
}
export default FigureDiv;