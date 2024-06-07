import { useEffect } from 'react';
import { useSession } from '../../../context/sessionContext';
import FigureDiv from './figuresDiv'

const FiguresComponent = () => {
    const { sessionList, patientList , listOfPatients} = useSession()
    useEffect(() => {
        listOfPatients()

    }, [])

    let SessionTotal = sessionList.length
    let PatientTotal = patientList.length

    return (
        <div className="bg-gray-100 grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-3 p-5 rounded-lg">
            <FigureDiv img="/noun-person.png" alt="person" title="Person"  dataFigure={PatientTotal}/>
            <FigureDiv img="/noun-report.png" alt="Diagnosis" title="Diagnosis"  dataFigure="212"/>
            <FigureDiv img="/noun-therapy-appointment.png" alt="Session" title="Session"  dataFigure={SessionTotal}/>
        </div>
    )
}
export default FiguresComponent;
