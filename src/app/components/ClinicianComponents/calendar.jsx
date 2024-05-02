import styles from "./ClinicianComponents.module.css"

const Calendar = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const monthIndex = currentDate.getMonth();
    const years = currentDate.getFullYear();

    const monthNames = ["january", "february", "march", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const month = monthNames[monthIndex]
    return (
        <div className={`${styles.calendarBg} py-2 flex flex-col items-center justify-center` }>
            <div className=" text-[#ffff]">

            <p>Today</p>
            <p>{month}</p>
            <p>{day}</p>
            </div>

        </div>
    )
}
export default Calendar;