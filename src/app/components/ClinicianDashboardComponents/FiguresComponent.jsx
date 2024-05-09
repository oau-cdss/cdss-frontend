import FigureDiv from './figuresDiv'

const FiguresComponent = () => {
    return (
        <div className="bg-gray-100 grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-3 p-5 rounded-lg">
            <FigureDiv img="/noun-person.png" alt="person" title="Person"/>
            <FigureDiv img="/noun-report.png" alt="Diagnosis" title="Diagnosis"/>
            <FigureDiv img="/noun-therapy-appointment.png" alt="Session" title="Session"/>
        </div>
    )
}
export default FiguresComponent;
