import React from 'react';

const SessionDivSkeletonLoader = ({ count }) => {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className="bg-[#f9f9f9] rounded-lg shadow-md w-[90%] lg:w-auto py-8 px-3 lg:px-12 lg:col-span-1 flex justify-center">
                    <div className="flex lg:flex-col jusstify-between lg:justify-center items-center lg:w-24">
                        <div className="w-[30px] h-[30px] lg:w-[65px] lg:h-[65px] flex justify-center items-center rounded-full bg-gray-300 mr-5"></div>
                        <div className="bg-gray-300 rounded mt-5 w-full lg:w-3/4 h-6 animate-pulse"></div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default SessionDivSkeletonLoader;
