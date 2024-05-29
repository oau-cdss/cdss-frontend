"use client";

import React from 'react';
import ClinicianSideBar from '../components/ClinicianDashboardComponents/clinicianSideBar';
import ClinicianNavbar from '../components/ClinicianDashboardComponents/clinicianNavbar';
import FiguresComponent from '../components/ClinicianDashboardComponents/figuresComponent';
import SessionComponent from '../components/ClinicianDashboardComponents/sessionComponent';
import UpcomingSchedule from '../components/ClinicianDashboardComponents/upcomingSchedule';
import Calendar from '../components/ClinicianDashboardComponents/calendar';
import ScheduleList from '../components/ClinicianDashboardComponents/scheduleList';
import { SessionProvider } from '../../context/sessionContext';

function ClinicianDashboard() {
  return (
  <SessionProvider>
      <div className='flex lg:grid grid-cols-6'>
        <ClinicianSideBar />
        <div className='px-2 lg:px-7 col-span-5'>
          <ClinicianNavbar />
          <div className='flex flex-col-reverse gap-y-6 lg:grid grid-cols-2 lg:grid-rows-1 lg:gap-x-7'>
            <div className='flex flex-col gap-y-6'>
              <FiguresComponent />
              <SessionComponent />
            </div>
            <div className='grid grid-cols-1 gap-y-12 row-span-1'>
              <div className='lg:grid flex flex-col-reverse lg:grid-cols-3 gap-x-2 gap-y-6'>
                <UpcomingSchedule />
                <Calendar />
              </div>
              <div>
                <ScheduleList />
              </div>
            </div>
          </div>
        </div>
      </div>
      </SessionProvider>
  );
}

export default ClinicianDashboard;
