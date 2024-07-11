"use client"
import Link from 'next/link.js';
import SessionDiv from './sessionDiv.jsx';
import { useSession } from '../../../context/sessionContext.jsx';
import SessionDivSkeletonLoader from '../LoadingPhase/sessionDivSkeletonLoader.jsx';

const SessionComponent = () => {
    const { supportedRegionList,loading } = useSession();
   
    return (

        <div className="bg-gray-100  p-5 rounded-lg">
            <div className='flex justify-between items-center mb-5'>
                <p className='text-gray-500 text-base'>Choose a session</p>

                <Link href="/schedule">
                <p className='text-[#1e59cf] underline text-base font-semibold'>See more</p>
                </Link>
            </div>
            

         
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-3 gap-x-6'>
            { loading ? 
            (
                <SessionDivSkeletonLoader count={3}/>

            ) : (
            
                                supportedRegionList.slice(0, 3).map((list, i) => (
                                    <SessionDiv key={i} img={list.iconUrl} altTitle={list.name} title={list.name} regionId={list.id}/>
                                ))
                            
                        )}
            </div>
        </div>
    )
}
export default SessionComponent;
