'use client'
import {UserData} from '../context/UserContext'
import { useContext } from 'react'
import { useRef, useState } from "react";

export default function OtpBox() {
  const {step,setStep}=useContext(UserData)

    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const inputsRef = useRef([]);

    // handle input change
    const handleChange = (value, index) => {
        if (!/^[0-9]?$/.test(value)) return; // only numbers

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // move to next input
        if (value && index < 5) {
            inputsRef.current[index + 1].focus();
        }
    };

    // handle backspace
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    return (
      <div className="w-full md:w-1/2 2xl:flex flex flex-col justify-center items-center gap-8  ">

  {/* Title */}
  <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 text-center">
    Enter the 6-digit code
  </h1>

  {/* OTP Boxes */}
  <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] 2xl:w-[30%] flex justify-center gap-2 sm:gap-3">

    {otp.map((digit, index) => (
      <input
        key={index}
        ref={(el) => (inputsRef.current[index] = el)}
        type="text"
        maxLength="1"
        value={digit}
        onChange={(e) => handleChange(e.target.value, index)}
        onKeyDown={(e) => handleKeyDown(e, index)}
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-center text-lg md:text-xl font-semibold 
                   border border-gray-300 rounded-lg 
                   focus:border-black focus:ring-2 focus:ring-gray-200 outline-none
                   transition"
      />
    ))}

  </div>

  {/* Submit Button */}
<button 
  onClick={() => {
    if (otp.join('') === "123123") {
      setStep('submit');
    } else {
      alert("Please enter a valid 6-digit OTP");
    }
  }}

  className={`w-full sm:w-[80%] md:w-[60%] lg:w-[45%] 2xl:w-[20%] xl-[30%] h-[50px] bg-black text-white py-5 p-2 flex justify-center items-center cursor-pointer rounded
                ? "bg-black text-white hover:bg-gray-800" 
                : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
>
  Submit
</button>

</div>
    );
}