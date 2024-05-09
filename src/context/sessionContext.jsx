"use client"
import { createContext, useContext } from "react";
import React, { useState, useEffect } from "react";

const SessionContext = createContext()

export const SessionProvider = ({children}) => {
    const [startSession, setStartSession] = useState(false)
        

   
    return (
      <SessionContext.Provider
         value={{
           startSession, setStartSession
         }}>
           {children}
      </SessionContext.Provider>
    )
}

export const useSession = () => {
    const context = useContext(SessionContext);
    if(!context) {
        throw new Error("useSession must be used within a SessionProvider")
    }
    return context
}