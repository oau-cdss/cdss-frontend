
"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
import Image from "next/image";

function Main() {
  const [result, setResult] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [loading, setLoading] = useState(true);

  const openModal = (session) => {
    setSelectedSession(session);
  };

  const closeModal = () => {
    setSelectedSession(null);
  };

  function formatTime(dateString) {
    const date = new Date(dateString); // Assuming UTC time
    const localTime = date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return localTime;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${day} ${monthNames[monthIndex]} ${year}`;
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(
        "https://cdss-api.fly.dev/v1/questions/supported-regions",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        const { payload } = response.data;
        setResult(payload.regions);
        setLoading(false)
        console.log(result);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(
        "https://cdss-api.fly.dev/v1/sessions/list",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        setSessions(data.payload.sessions);
        console.log(sessions);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex h-full  w-full gap-4  p-8 text-[#03021B4D]">
      <Modal isOpen={!!selectedSession} onClose={closeModal} />
      <div className="w-3/6 h-fit border shadow-md bg-[#F9F9F9] p-8 rounded-lg">
        <h3 className="text-xl font-semibold pb-4">Choose a session</h3>
        {loading ? ( // Display loading state if data is being fetched
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="grid grid-cols-3 gap-8">
            {result.map((item, index) => (
              <div
              key={index}
              className="border shadow-lg p-4 gap-3 rounded-lg bg-[#FBFBFB] flex flex-col justify-center items-center font-bold text-lg"
            >
              
                <Image src={item.iconUrl} alt="logo" width={50} height={50} />
                <p className="text-center text-[#03021B4D]">{item.name}</p>
           
            </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-3/6 h-fit bg-[#F9F9F9] border shadow-md p-8 rounded-lg">
        <h3 className="text-xl font-semibold  pb-4">Scheduled sessions</h3>
        <div className="flex flex-col gap-8 text-[#03021B4D]">
          {sessions.length === 0 ? ( 
            <p className="text-center text-gray-500">
              You do not have a session yet
            </p> 
          ) : (
            <div className="flex flex-col gap-8 text-[#03021B4D]">
              {sessions.map((session, index) => (
                <div
                  key={index}
                  className="border shadow-lg p-6 rounded-lg bg-[#FBFBFB] flex flex-col gap-4 font-semibold text-sm "
                >
                  <div className="flex justify-between ">
                    <div className="flex flex-col">
                      <h2 className="font-semibold text-xl text-[#03021B4D]">
                        Session type
                      </h2>
                      <p className="font-bold text-sm">{session.type}</p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() => openModal(session)}
                        className="px-3 py-2 text-xl bg-[#1E59CF] text-white rounded hover:bg-blue-600"
                      >
                        Start session
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-10">
                    <div>
                      <p className="font-semibold text-xl text-[#03021B4D]">
                        Date
                      </p>
                      <p className="font-bold text-sm">
                        {formatDate(session.scheduledTime)}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-xl text-[#03021B4D]">
                        Time
                      </p>
                      <p className="font-bold text-sm">
                        {formatTime(session.scheduledTime)}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-xl text-[#03021B4D]">
                        Clinician
                      </p>
                      <p className="font-bold text-sm">
                        {session.clinician.fullName}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


export default Main;
