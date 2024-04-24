import React from "react";
import Image from "next/image";
import Link from "next/link";

function Sidebar() {
  return (
    <div class="w-1/5 h-full bg-gray-200 p-8 flex flex-col items-end gap-32">
      <div className="text-[#0D0D0D] font-bold text-3xl flex items-center justify-center gap-4">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        CDSS
      </div>
      <div className="flex flex-col gap-8">
        <Link href='/'>
        <div className="flex flex-col gap-2 items-center justify-center">
          <Image src="/dashboard.png" alt="logo" width={40} height={40} />
          <p>Dashboard</p>
        </div>
        </Link>
        <Link href='/sessions'>
        
        <div className="flex flex-col gap-2 items-center justify-center">
          <Image src="/sessions.png" alt="logo" width={40} height={40} />
          <p>Sessions</p>
        </div>
        </Link>
        <Link href='/messages'>
        <div className="flex flex-col gap-2 items-center justify-center">
          <Image src="/messages.png" alt="logo" width={40} height={40} />
          <p>Messages</p>
        </div>
        </Link>
      </div>
<Link href ='/logout'>

      <div className="flex flex-col gap-2 items-center justify-center">
        <Image src="/logout.png" alt="logo" width={40} height={40} />
        <p>Logout</p>
      </div>
      </Link>
    </div>
  );
}

export default Sidebar;
