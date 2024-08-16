'use client'

import React, { useState, useEffect } from 'react';
import Header from '../component/header';
import Sidebar from '../component/sidebar';
import axios from 'axios';
import Modal from '../component/Modal';
import Image from 'next/image';

function Patient() {
  const [result, setResult] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get('https://cdss-api.fly.dev/v1/questions/supported-regions', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        const { payload } = response.data;
        setResult(payload.regions);
        setLoading(false)
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchQuestions = async (sessionId) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(
        `https://cdss-api.fly.dev/v1/sessions/${sessionId}/save-and-next`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const { data } = response;
        setQuestions(data); 
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const openModal = (session) => {
    setSelectedSession(session);
  };

  const closeModal = () => {
    setSelectedSession(null);
  };

  // const handleStartSession = (sessionId) => {
  //   fetchQuestions(sessionId);
  //   closeModal(); // Close the modal after starting the session
  // };

  return (
    <div className="flex h-full w-screen">
  <div className="w-[15%]">
    <Sidebar />
  </div>

  <div className="flex w-[85%] flex-col h-full px-5">
    <Header />
   
  

        <div className="flex w-full gap-4 p-8">
          <div className="w-full border shadow-md bg-[#F9F9F9] p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-[#03021B4D] pb-4">Choose a session</h3>
            {loading ? ( 
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
            <div className="grid lg:grid-cols-3 xl:grid-cols-3 gap-8">
              {result.map((item, index) => (
                <div
                  key={index}
                  className="border shadow-lg p-4 rounded-lg bg-[#FBFBFB] flex flex-col justify-center items-center font-bold text-lg"
                >
                  <button onClick={() => openModal(item)}  className="flex flex-col justify-center items-center gap-3">
                    <Image src={item.iconUrl} alt="logo" width={50} height={50} />
                    <p className="text-center text-[#03021B4D]">{item.name}</p>
                  </button>
                </div>
              ))}
            </div>
        )}
          </div>
        </div>
        <Modal isOpen={!!selectedSession} onClose={closeModal} />
      </div>
      
    </div>
  );
}

export default Patient;
