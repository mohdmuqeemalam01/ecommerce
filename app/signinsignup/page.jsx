'use client'
import Login from '../components/login'
import Register from '../components/signup'
import { useState,useContext } from 'react'
import { Poppins } from 'next/font/google';
import ForgatPassword from '../components/forgatpass'
import {UserData} from '../context/UserContext'
import OtpBox  from '../components/otp';
import SetPassword from '../components/setpassword';

const popins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export default function LogReg() {

  const [sign, SetSign] = useState(true)
const {step}=useContext(UserData)
console.log(step)

  return (
    <div className={`${popins.className} flex  h-screen overflow-hidden`}>

      {/* LEFT SIDE (FIXED IMAGE) */}
      <div className="hidden md:block md:w-2/3 2xl:w-1/2 relative">
        <img
          src="/nature.jpg"
          alt="login"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* overlay text */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Welcome to Elysian.
          </h1>
          <p className="text-sm md:text-lg">
            Login to continue your journey
          </p>
        </div>
      </div>



      {/* RIGHT SIDE (SCROLLABLE) */}


  {
  step=='forget' && <ForgatPassword />
}

{
  step=='login' && (
    <div className="w-full md:w-1/2 2xl:flex justify-center overflow-y-auto bg-white">

      <div className="p-6 lg:ms-10 md:p-12">

        <h3 className="text-2xl font-bold mb-10">
          <span className="border-b-2 py-1">Ely</span>sian Interiors
        </h3>

        {/* Tabs */}
        <div className="border-b border-[#444748] sm:w-[70%] md:w-[90%] lg:w-[88%] mb-10">
          <ul className="flex gap-10 pb-2">
            <li
              onClick={() => SetSign(true)}
              className={`cursor-pointer ${sign ? 'border-b-2 border-black' : ''}`}
            >
              Login
            </li>
            <li
              onClick={() => SetSign(false)}
              className={`cursor-pointer ${!sign ? 'border-b-2 border-black' : ''}`}
            >
              Register
            </li>
          </ul>
        </div>

        {/* Form */}
        <div className='mx-[-20]'>
          {sign ? <Login /> : <Register />}
        </div>

      </div>
    </div>
  )
 
}
{
    step=='otp' && <OtpBox/>
}
{
  step=='submit' && <SetPassword/>
}

    </div>
  )
}