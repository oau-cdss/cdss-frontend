import Image from "next/image";

const FigureDiv = ({img, altTitle, title}) => {
    return (
        <div className="bg-[#f9f9f9] rounded-lg shadow-md h-auto px-3 py-5 ">
            <div className="flex items-center">
                <Image src={img} alt={altTitle} width={60} height={60}/>
                <p className="text-xl font-bold text-[#03021b] ">{title}</p>
            </div>

            <div className="mt-24">
                <p className="font-extrabold text-4xl text-gray-500">212</p>
            </div>

        </div>
    )
}
export default FigureDiv;