import React from 'react';
import { useSession } from '../../../context/sessionContext';

const ScheduledTime = () => {
    const {
        selectedDate, setSelectedDate,
        selectedMonth, setSelectedMonth,
        selectedYear, setSelectedYear,
        selectedTime, setSelectedTime,
        ScheduleSession, steps, setSteps
    } = useSession();

    const dates = [...Array(31).keys()].map(i => i + 1);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const years = Array.from({ length: 2040 - 2023 + 1 }, (_, i) => 2023 + i);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await ScheduleSession();
        if (steps === 2) {
            setSteps(3);
        }
    };

    return (
        <div className="py-8 flex flex-col items-center">
            <h3 className="text-center text-lg font-semibold">Date of Appointment</h3>
            <p className="text-gray-500 text-base font-bold text-center mb-4">
                Please provide your available date and time in the text box below
            </p>
            <div className="w-full max-w-md">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-3 gap-x-6 mb-4">
                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="date" className="font-medium">Date</label>
                            <select 
                                id="date" 
                                aria-label="Select Date" 
                                className="w-full h-[40px] border border-gray-300 focus:outline-none rounded-md py-2 px-4"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                            >
                                {dates.map((date) => (
                                    <option key={date} value={String(date).padStart(2, '0')}>{date < 10 ? "0" + date : date}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="month" className="font-medium">Month</label>
                            <select 
                                id="month" 
                                aria-label="Select Month" 
                                className="w-full h-[40px] border border-gray-300 focus:outline-none rounded-md py-2 px-4"
                                value={selectedMonth}
                                onChange={(e) => { 
                                    setSelectedMonth(e.target.value)
                                }}
                            >
                                {months.map((month, index) => (
                                    <option key={index} value={String(index + 1).padStart(2, '0')}>{month}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col gap-y-1">
                            <label htmlFor="year" className="font-medium">Year</label>
                            <select 
                                id="year" 
                                aria-label="Select Year" 
                                className="w-full h-[40px] border border-gray-300 focus:outline-none rounded-md py-2 px-4"
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                            >
                                {years.map((year) => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-1 mb-8">
                        <label htmlFor="time" className="font-medium">Time</label>
                        <input 
                            type="time" 
                            id="time" 
                            aria-label="Select Time" 
                            className="w-full h-[40px] border border-gray-300 rounded-md py-2 px-4 focus:outline-none" 
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                        />
                    </div>

                    <button 
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                        type="submit"
                    >
                        Start Session
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ScheduledTime;
