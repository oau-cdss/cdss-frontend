"use client";

import { useSchedule, ScheduleProvider } from "../../context/scheduleContext";
import SessionDiv from "../components/ClinicianDashboardComponents/sessionDiv";
import ScheduleSessionOverlay from "../components/sessionsOverlay/scheduleSessionOverlay";
import ClinicianSideBar from "../components/ClinicianDashboardComponents/clinicianSideBar";
import ClinicianNavbar from "../components/ClinicianDashboardComponents/clinicianNavbar";
import SessionDivSkeletonLoader from "../components/LoadingPhase/sessionDivSkeletonLoader";
import { SessionProvider } from "../../context/sessionContext";

const Schedule = () => {
  const { supportedRegionList, loading } = useSchedule();

  return (
    <div className='flex lg:grid grid-cols-6'>
      <ClinicianSideBar />
      <div className='col-span-5 w-full'>
        <ClinicianNavbar />
        <div className="bg-gray-100 w-full px-6 py-4">
          <p className="text-lg font-semibold">Choose a session</p>
          <div className='grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-16 gap-x-3 py-6'>
            {loading ? (
              <SessionDivSkeletonLoader count={6} />
            ) : (
              supportedRegionList.map((list, i) => (
                <SessionDiv
                  key={i}
                  img={list.iconUrl}
                  altTitle={list.name}
                  title={list.name}
                  regionId={list.id}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <ScheduleSessionOverlay />
    </div>
  );
};

const ScheduleWithProvider = () => (
  <ScheduleProvider>
    <SessionProvider>
      <Schedule />
    </SessionProvider>
  </ScheduleProvider>
);

export default ScheduleWithProvider;
