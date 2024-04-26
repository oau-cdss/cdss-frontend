import FigureDiv from './figuresDiv'

const FiguresComponent = () => {
    return (
        <div className='bg-[#e2dfdf] flex p-5 rounded-lg'>
            <FigureDiv img="/noun-person.png" alt="person" title="Person"/>
            <FigureDiv img="/noun-report.png" alt="Diagnosis" title="Diagnosis"/>
            <FigureDiv img="/noun-therapy-appointment.png" alt="Session" title="Session"/>
        </div>
    )
}
export default FiguresComponent;
