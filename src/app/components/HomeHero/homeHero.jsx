import Link from "next/link";
import Image from "next/image";

const HomeHero = () => {
    return (
        <div className="lg:grid grid-cols-2 grid-rows-1 gap-x-8 lg:pb-16 mb-6 lg:mb-0">
            <div className=" hidden  lg:flex flex-col mt-[130px] ml-[80px] ">
                <p className="text-[#1E59CF] max-w-[650px] h-[192px] font-como font-medium lg:text-4xl leading-[95px]">
                    Revolutionize Movement:<br />Your Path to Musculoskeletal Wellness Begins!
                </p>
                <div className="lg:flex items-center bg-white rounded-[5px] h-[90px] w-[720px] z-50  text-[21px] font-normal shadow-md px-5">
                    <div className="flex items-center justify-center border-r border-[#b3b3b3] pr-[25px]">
                        <Image src="/search.png" alt="search" width={20} height={20} />
                        <p className="ml-[20px]">I&apos;d like to find out</p>
                    </div>
                    <div className="flex items-center justify-center text-[#b3b3b3] pl-[25px] pr-[44px]">
                        <p className="mr-[30px]">How to start a session</p>
                        <Image src="/arrow-down.png" alt="arrow-down" width={20} height={20} />
                    </div>
                    <div className="flex justify-center items-center bg-[#1E59CF] text-white font-medium rounded-md text-sm p-3 ml-3">
                        <Link href="/">Learn More</Link>
                    </div>
                </div>
            </div>
            <div className="relative lg:mt-0 mt-5 w-[95vw] lg:w-auto mx-auto">
                <p className="text-[#1E59CF] font-como font-medium block lg:hidden text-2xl mb-3 ">
                    Revolutionize Movement:<br />Your Path to Musculoskeletal Wellness Begins!
                </p>
                <div className="relative mt-0">
                    <Image 
                        src="/sideview1.png" 
                        alt="patient's side view" 
                        width={520} 
                        height={57}
                        className="hidden lg:block mt-10"
                    />
                    <Image 
                        src="/sideview1-sm.png" 
                        alt="patient's side view" 
                        width={520} 
                        height={57}
                        className="block lg:hidden "
                    />
                    <div className="flex justify-center">
                        <div className="flex  bg-white rounded-[5px] z-6  text-[21px] font-normal shadow-md lg:hidden mx-auto absolute -bottom-10 w-auto p-4">
                            <div className="flex items-center justify-center text-[#b3b3b3] mr-6">
                                <p className="text-base font-medium mr-1">How to start a session</p>
                                <Image src="/arrow-down.png" alt="arrow-down" width={15} height={15} />
                            </div>
                            <div className="p-2 font-medium rounded-md text-sm bg-[#1E59CF] text-white">
                                <Link href="/">Learn More</Link>
                            </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeHero;
