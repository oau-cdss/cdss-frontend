import Image from "next/image";

const FigureDiv = ({img, altTitle, title, dataFigure}) => {
    return (
        <div className="bg-[#f9f9f9] rounded-lg shadow-md h-auto px-1 py-5 ">
            <div className="flex justify-center lg:justify-start items-center">
                <Image src={img} alt={altTitle} width={60} height={60}/>
                <p className="text-xl font-bold text-[#03021b] ">{title}</p>
            </div>

            <div className="mt-16 lg:mt-24">
                <p className="font-extrabold text-4xl text-gray-500">{dataFigure}</p>
            </div>

        </div>
    )
}
export default FigureDiv;