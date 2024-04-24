import React from 'react'
import ClinicianSideBar from '../components/ClinicianComponents/clinicianSideBar';
import ClinicianNavbar from '../components/ClinicianComponents/clinicianNavbar';
import FiguresComponent from '../components/ClinicianComponents/FiguresComponent' ;

function ClinicianDashboard() {
  return (
    <div className=''>
      <div className='fixed top-0 left-0 h-100'>
      <ClinicianSideBar/>
    </div>

    <div className='ml-56'>
      <ClinicianNavbar/>
      <div className='flex'>
        <div>
          <FiguresComponent/>

        </div>

        <div>

        </div>
      </div>

    </div>

    </div>
    
  )
}

export default ClinicianDashboard;