'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Main() {
  const [result, setResult] = useState([]);

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
        console.log(result)
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className="flex-1 w-full h-4/5 bg-blue-500 p-8">
      <h3>Choose session</h3>
      <div>
        {result.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
  

 
}

export default Main;
