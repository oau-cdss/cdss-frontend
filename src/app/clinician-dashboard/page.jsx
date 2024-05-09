import React from 'react'
import ClinicianSideBar from '../components/ClinicianDashboardComponents/clinicianSideBar';
import ClinicianNavbar from '../components/ClinicianDashboardComponents/clinicianNavbar';
import FiguresComponent from '../components/ClinicianDashboardComponents/FiguresComponent' ;
import SessionComponent from '../components/ClinicianDashboardComponents/SessionComponent' ;
import UpcomingSchedule from '../components/ClinicianDashboardComponents/upcomingschedule' ;
import Calendar from '../components/ClinicianDashboardComponents/calendar' ;
import ScheduleList from '../components/ClinicianDashboardComponents/scheduleList' ;
//import RegistrationProvider from '../../context/registrationContext'


function ClinicianDashboard() {
  return (
    // <RegistrationProvider>

    <div className=''>
      <div className='fixed top-0 left-0 h-100'>
      <ClinicianSideBar/>
    </div>

    <div className='lg:ml-56 px-0 mr-0'>
      <ClinicianNavbar/>
      <div className='flex flex-col-reverse gap-y-6 lg:grid grid-cols-2 lg:grid-rows-1 lg:gap-x-5'>
        <div className = 'flex flex-col  gap-y-6'>
          <FiguresComponent/>
          <SessionComponent/>

        </div>
        
        <div className='grid grid-cols-1 gap-y-12 row-span-1'>
        <div className='lg:grid flex flex-col-reverse lg:grid-cols-3 gap-x-2 gap-y-6'>
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
    
     //</RegistrationProvider>
  )
}

export default ClinicianDashboard;