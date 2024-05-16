"use client";

import React, { useEffect } from "react";
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import Main from "./component/main";
import axios from "axios";

function Patient() {
  return (
    <div className="flex h-full w-screen">
      <Sidebar />

      <div className="flex flex-col w-4/5 h-full ml-[19rem]">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default Patient;
