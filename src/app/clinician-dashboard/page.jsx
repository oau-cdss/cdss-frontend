import React from 'react'
import ClinicianSideBar from '../components/ClinicianComponents/clinicianSideBar';
import ClinicianNavbar from '../components/ClinicianComponents/clinicianNavbar';
import FiguresComponent from '../components/ClinicianComponents/FiguresComponent' ;
import SessionComponent from '../components/ClinicianComponents/SessionComponent' ;
import UpcomingSchedule from '../components/ClinicianComponents/upcomingschedule' ;
import Calendar from '../components/ClinicianComponents/calendar' ;
import ScheduleList from '../components/ClinicianComponents/scheduleList' ;



function ClinicianDashboard() {
  return (
    <div className=''>
      <div className='fixed top-0 left-0 h-100'>
      <ClinicianSideBar/>
    </div>

    <div className='lg:ml-56'>
      <ClinicianNavbar/>
      <div className='flex flex-col-reverse gap-y-5 lg:grid grid-cols-2 lg:grid-rows-1 lg:gap-x-5'>
        <div className = 'lg:flex flex-col gap-y-3'>
          <FiguresComponent/>
          <SessionComponent/>

        </div>
        
        <div className='grid grid-cols-1 gap-y-12 row-span-1'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-2'>
            <UpcomingSchedule/>
            <Calendar/>
          </div>

          <div>
            <ScheduleList/>
          </div>
        </div>


      </div>

    </div>

    </div>
    
  )
}

export default ClinicianDashboard;