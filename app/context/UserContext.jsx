'use client'
import { useState ,createContext } from "react"
export const UserData=createContext();

export function UserProvider({children }){
    const [step,setStep]=useState('login');
    return(
        <UserData.Provider value={{step,setStep}}>
         {children}
        </UserData.Provider>
    )
}
