import SessionDiv from './sessionDiv.jsx';

const SessionComponent = () => {
    return (

        <div className="bg-gray-100  p-5 rounded-lg">
            <div className='flex justify-between items-center mb-5'>
                <p className='text-gray-500 text-base'>Choose a session</p>
                <p className='text-[#1e59cf] underline text-base font-semibold'>See more</p>
            </div>
            <div className='grid grid-cols-3 gap-x-6'>
            <SessionDiv img="/leg.png" alt="Tendinitis" title="Tendinitis"/>
            <SessionDiv img="/hand.png" alt="carpal tunnel syndrome" title="carpal tunnel syndrome"/>
            <SessionDiv img="/knee.png" alt="Osteoarthritis" title="Osteoarthritis"/>
            </div>
        </div>
    )
}
export default SessionComponent;
