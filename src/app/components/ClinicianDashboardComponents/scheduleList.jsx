import ScheduleComponent from "./scheduleComponent"

const ScheduleList = () => {
    return (
        <div className="w-full shadow-md bg-gray-100 rounded-lg p-3">
            <p className="mb-4">Schedule</p>

            <div className="grid grid-cols-1 gap-y-3">
            <ScheduleComponent/>
            <ScheduleComponent/>
            <ScheduleComponent/>
            <ScheduleComponent/>
            </div>

        </div>
    )
}
export default ScheduleList;