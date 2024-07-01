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
  const [question, setQuestion] = useState("");
  const [questionKind, setQuestionKind] = useState("");
  const [pendingSessionsCount, setPendingSessionsCount] = useState(0);
  const [completedSessionsCount, setCompletedSessionsCount] = useState(0);

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
        const { payload } = response.data;
        setResult(payload.regions);
        setLoading(false);
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
        setSessions(data.payload.sessions);
        const pendingCount = data.payload.sessions.filter(
          (session) => session.status === "PENDING"
        ).length;
        setPendingSessionsCount(pendingCount);

        const completedCount = data.payload.sessions.filter(
          (session) => session.status === "PATIENT_RESPONDED"
        ).length;
        setCompletedSessionsCount(completedCount);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchQuestions = async (sessionId) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.put(
        `https://cdss-api.fly.dev/v1/sessions/${sessionId}/start`,
        {},

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        setQuestion(data.payload.text);
        setQuestionKind(data.payload.kind);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const openModal = async (session) => {
    await fetchQuestions(session.id);
    setSelectedSession(session);
  };

  const closeModal = () => {
    setSelectedSession(null);
  };

  return (
    <div>
       <Modal
        isOpen={!!selectedSession}
        onClose={closeModal}
        initialText={question}
        initialKind={questionKind}
        sessionId={selectedSession?.id}
        setQuestion={setQuestion}
      />
      <div className="flex flex-col lg:flex-row h-full  w-full gap-8  p-8 text-[#03021B4D]">
      <div className="lg:w-[50%] xl:w-[50%] w-full h-fit border shadow-md bg-[#F9F9F9]  p-4 rounded-lg flex flex-col gap-8">
        {/* <h3 className="text-xl font-semibold pb-4">Choose a session</h3>
        {loading ? (
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
        )} */}
        <div className="bg-[#F9F9F9]  w-full grid lg:grid-cols-2 xl:grid-cols-3 gap-4 font-bold">
          <div className="border rounded-lg p-3 flex flex-col gap-8">
            <div className="flex items-start gap-2 text-base bg-[#F9F9F9]">
              <Image
                src="/total.png"
                alt="sessions.png"
                width={25}
                height={25}
              />
              <p>Total Sessions</p>
            </div>
            <p className="text-3xl">{sessions.length}</p>
          </div>

          <div className="border rounded-lg p-3 flex flex-col  gap-8">
            <div className="flex items-start gap-2 text-base bg-[#F9F9F9]">
              <Image
                src="/upcoming.png"
                alt="sessions.png"
                width={25}
                height={25}
              />
              <p>Upcoming Sessions</p>
            </div>
            <p className="text-3xl">{pendingSessionsCount}</p>
          </div>
          <div className="border rounded-lg p-3 flex flex-col  gap-8">
            <div className="flex items-start gap-2 text-base bg-[#F9F9F9]">
              <Image
                src="/completed.png"
                alt="sessions.png"
                width={25}
                height={25}
              />
              <p>Completed Sessions</p>
            </div>
            <p className="text-3xl">{completedSessionsCount}</p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url("/bag.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "100%",
            minHeight: "200px", 
            borderRadius: "12px", 
          }}
          className="p-4 text-white font-semibold flex flex-col items-center justify-center text-center overflow-hidden"
        >
          <h3 className="font-bold text-xl mb-4">
            Reduce Your Risk of a Work-related Musculoskeletal Disorders
          </h3>
          <p>
            Incorporate stretching and movement to help strengthen your posture.
            Reduce repetitive or prolonged activities as much as possible. Take
            frequent breaks throughout your day. Use the proper mechanics to
            lift objects by bending at the knees.
          </p>
        </div>
      </div>
      <div className="lg:w-[50%] xl:w-[50%] w-full h-fit bg-[#F9F9F9] border shadow-md p-8 rounded-lg">
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
                    <div className="flex gap-8 items-center">
                      <div className="flex flex-col">
                        <h2 className="font-semibold text-xl text-[#03021B4D]">
                          Session type
                        </h2>
                        <p className="font-bold text-sm">{session.type}</p>
                      </div>

                      {session.region && session.region.iconUrl && (
                        <Image
                          src={session.region.iconUrl}
                          alt="logo"
                          width={40}
                          height={40}
                        />
                      )}
                    </div>

                    <div className="flex items-center">
                      {session.status === "PENDING" && (
                        <button
                          onClick={() => openModal(session)}
                          className="px-3 py-2 text-xl bg-[#1E59CF] text-white rounded hover:bg-blue-600"
                        >
                          Start session
                        </button>
                      )}
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
    </div>
    
  );
}

export default Main;
