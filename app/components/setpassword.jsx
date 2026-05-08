export default function SetPassword() {
    return (
       <form className="w-full  md:w-1/2 2xl:flex flex flex-col justify-center items-center gap-8  ">

  {/* Password */}
  <div className=" w-full sm:w-[80%] md:w-[60%] lg:w-[45%] 2xl:w-[30%] flex flex-col gap-5 " >
    <label className="block mb-1 text-[#444748] font-medium text-sm sm:text-base">
      Password
    </label>

    <input
      type="password"
      placeholder="••••••••"
      className="w-full border border-[#C4C7C7] py-2.5 px-3 rounded-md 
                 text-sm sm:text-base
                 focus:border-black focus:outline-none"
    />
  </div>

  {/* Confirm Password */}
  <div className=" w-full sm:w-[80%] md:w-[60%] lg:w-[45%] 2xl:w-[30%] flex flex-col gap-5">
    <label className="block mb-1 text-[#444748] font-medium text-sm sm:text-base">
      Confirm Password
    </label>

    <input
      type="password"
      placeholder="••••••••"
      className="w-full border border-[#C4C7C7] py-2.5 px-3 rounded-md 
                 text-sm sm:text-base
                 focus:border-black focus:outline-none"
    />
  </div>

  {/* Button */}
  <button
    type="submit"
    className="w-full sm:w-[80%] md:w-[60%] lg:w-[45%] 2xl:w-[30%] flex flex-col gap-5 bg-black text-white py-3 rounded-md 
               hover:bg-gray-800 transition text-sm sm:text-base"
  >
    Reset Password
  </button>

</form>
    )
}