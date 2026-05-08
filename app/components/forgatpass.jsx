'use client'
import { UserData } from '../context/UserContext'
import { useContext } from 'react'
export default function ForgetPassword() {
    const { step, setStep } = useContext(UserData)

    return (

        <div className="flex w-full md:w-1/2 justify-center items-center min-h-screen px-4">

            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[45%] 2xl:w-[30%] flex flex-col gap-5">

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-[44px] font-semibold text-center md:text-left">
                    Forgot Password
                </h1>

                {/* Input */}
                <input
                    type="email"
                    placeholder="name@domain.com"
                    className="w-full border border-[#C4C7C7] py-3 px-3 rounded focus:border-black focus:outline-none"
                />

                {/* Info Text */}
                <p className="text-sm sm:text-base text-[#555] leading-relaxed text-center md:text-left">
                    We’ll send a verification code to this email or phone number if it
                    matches an existing account.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-2">

                    <button onClick={() => {
                        setStep('otp') }} className="w-full sm:w-1/2 bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                        Next
                    </button>

                    <button onClick={() => {
                        setStep('login')


                    }} className="w-full sm:w-1/2 border border-black py-2 rounded hover:bg-gray-100 transition">
                        Back
                    </button>

                </div>

            </div>
        </div>
    );
}