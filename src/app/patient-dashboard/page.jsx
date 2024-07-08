"use client";

import React, { useState} from "react";
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import Main from "./component/main";


function Patient() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className="flex h-full w-screen">
   <div className="hidden lg:block lg:w-[15%]">
    <Sidebar isSidebarOpen={isSidebarOpen} />
  </div>

  <div className="flex w-full lg:w-[85%] xl:w-[85%]  flex-col h-full px-5">
    <Header isDropdownOpen={isDropdownOpen} />
    <Main />
  </div>
</div>

  );
}

export default Patient;
