"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function Sidebar() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear all items from local storage
    localStorage.clear();
    // Redirect to the login page or perform any other action
    window.location.href = '/login';
  };

  // Define base path
  const basePath = "/patient-dashboard";

  const linkStyle = "hover:bg-[#c1bdd9] hover:text-[#1E59CF] text-[#03021B66] ";
  const activeStyle = "text-[#1E59CF] bg-[#03021B66]";

  return (
    <div
      style={{
        boxShadow: "0px 8px 24px -4px #03021B14",
        height: "100%", // Set height to 100% of viewport height
        position: "fixed", // Position fixed
        top: 0, // Fixed to the top
        left: 0, // Fixed to the left
      }}
      className="w-1/5 gap-20 bg-[#FDFDFD] p-8 flex flex-col items-end justify-between rounded-tr-3xl rounded-br-3xl"
    >
      <div className="text-[#0D0D0D] font-bold text-3xl flex items-center justify-center gap-4 pt-8">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        CDSS
      </div>
      <div className="flex justify-between flex-col gap-8">
        <Link
          href={`${basePath}`}
          className={
            router.pathname === `${basePath}` ? activeStyle : linkStyle
          }
        >
          <div className="flex flex-col gap-2 items-center justify-center p-2">
            <Image src="/dashboard.png" alt="logo" width={40} height={40} />
            <p className="font-semibold text-lg">Dashboard</p>
          </div>
        </Link>
        <Link
          href={`${basePath}/sessions`}
          className={
            router.pathname === `${basePath}/sessions` ? activeStyle : linkStyle
          }
        >
          <div className="flex flex-col gap-2 items-center justify-center p-2">
            <Image src="/sessions.png" alt="logo" width={40} height={40} />
            <p className="font-semibold text-lg">Sessions</p>
          </div>
        </Link>
        <Link
          href={`${basePath}/messages`}
          className={
            router.pathname === `${basePath}/messages` ? activeStyle : linkStyle
          }
        >
          <div className="flex flex-col gap-2 items-center justify-center p-2">
            <Image src="/messages.png" alt="logo" width={40} height={40} />
            <p className="font-semibold text-lg">Messages</p>
          </div>
        </Link>
      </div>

      <button onClick={handleLogout} className="gap-2 items-center justify-center p-2">
        <Image src="/logout.png" alt="logo" width={40} height={40} />
        <p className="text-[#03021B66] font-semibold text-lg">Log out</p>
      </button>
    </div>
  );
}

export default Sidebar;
