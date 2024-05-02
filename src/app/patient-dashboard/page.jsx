'use client'

import React, {useEffect} from 'react'
import Header from './component/header'
import Sidebar from './component/sidebar'
import Main from './component/main'
import axios from 'axios'

function Patient() {

  useEffect(() => {
    fetchQuestions();
  }, []);
  
 
  
  const fetchQuestions = async () => {
    try {
      let token = localStorage.getItem("authToken");
  
      // Check if token exists
      if (!token) {
        console.error("No authorization token found");
        return;
      }
  
      const response = await axios.put(
        'https://cdss-api.fly.dev/v1/sessions/6631bc365b317393fdd34ee9/start',
        // If you need to send data with the request, you can pass it here
        // data: { /* Your data object */ },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // Check if request was successful
      if (response.status === 200) {
        const { data } = response;
        console.log(data);
      } else {
        if (response.status === 401) {
          // Token expired, attempt token refresh
          token = await refreshToken();
          // Retry the request with the new token
          // Be cautious with retry logic to avoid infinite loops
        } else {
          console.error("Failed to fetch data. Status:", response.status);
        }
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
  
  


  return (
<div className="flex h-full w-screen">
  
  <Sidebar />
  
  <div className="flex flex-col w-4/5 h-full ml-[19rem]">
    
    <Header />
    <Main/>
    
    
  </div>
</div>
  )
}

export default Patient