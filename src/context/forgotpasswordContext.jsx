"use client"
import { createContext, useContext } from "react";
import React, { useState, useEffect } from "react";

const ForgotPasswordContext = createContext()

export const ForgotPasswordProvider = ({children,  ...options}) => {
    const [email, setEmail] = useState("")

    /*step 2*/
    const [tokenOne, setTokenOne] = useState("");
    const [tokenTwo, setTokenTwo] = useState("");
    const [tokenThree, setTokenThree] = useState("");
    const [tokenFour, setTokenFour] = useState("");
    const [fourDigitToken, setFourDigitToken] = useState("")
    const [password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")
    const [steps, setSteps] = useState(1)
  
    // Update fourDigitToken whenever any token changes
    useEffect(() => {
      const fourDigitToken = tokenOne + tokenTwo + tokenThree + tokenFour;
      setFourDigitToken(fourDigitToken);
    }, [tokenOne, tokenTwo, tokenThree, tokenFour, setFourDigitToken]);

    const recoverPasswordSubmit = (e) => {
        e.preventDefault()
       }

    const emailSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://cdss-api.fly.dev/v1/auth/request-password-reset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (response.ok) {
                const data = await response.json();
               
  
                // Handle successful signup
               alert("Email sucessfully sent")
            } else {
                const errorMessage = await response.text();
                setMessage(errorMessage);
            }
        } catch (error) {
            console.error('Error', error);
            alert(error);
          
        }
    };
    
    //To receive token
  const tokenSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('https://cdss-api.fly.dev/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({fourDigitToken}),
        });
        if (response.ok) {
            const data = await response.json();
           
    
            // Handle successful signup, e.g., redirect to dashboard
            //window.location.href = "/login";
        } else {
            const errorMessage = await response.text();
            setMessage(errorMessage);
        }
    } catch (error) {
        console.error('Error', error);
        alert(error);
        window.location.href = "/forgotpassword";
    }
};


   
    return (
      <ForgotPasswordContext.Provider
         value={{
            email, setEmail,
            tokenOne, setTokenOne,
             tokenTwo,   setTokenTwo,
             tokenThree, setTokenThree,
              tokenFour, setTokenFour,
              fourDigitToken, setFourDigitToken,
              password, setPassword,
              confirmPassword, setConfirmPassword,
              steps, setSteps, recoverPasswordSubmit, emailSubmit, tokenSubmit
         }}>
           {children}
      </ForgotPasswordContext.Provider>
    )
}

export const useForgotPassword = () => {
    const context = useContext(ForgotPasswordContext);
    if(!context) {
        throw new Error("useForgotPassword must be used within a ForgotPasswordProvider")
    }
    return context
}