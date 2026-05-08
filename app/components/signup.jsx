export default function Register() {
  return (
 <div>
            <form className="w-[100%] md:w-full  xl:w-[90%] max-w-md space-y-2 gap-4 flex flex-col p-6 justify-center  ">


                <div className="w-full  xl:w-[100%]">
                    <label className="block mb-1 text-[#444748] font-medium">
                    Full Name
                    </label>

                    <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full border border-[#C4C7C7] py-2 p-2 rounded focus:border-black focus:outline-none"
                    />
                </div>
                <div className="w-full  xl:w-[100%]">
                    <label className="block mb-1 text-[#444748] font-medium">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="name@domain.com"
                        className="w-full border border-[#C4C7C7] py-2 p-2 rounded focus:border-black focus:outline-none"
                    />
                </div>


                
                  <div className="w-full  xl:w-[100%]">
                    <label className="block mb-1 text-[#444748] font-medium">
                       Password
                    </label>

                    <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full border border-[#C4C7C7] py-2 p-2 rounded focus:border-black focus:outline-none"
                    />
                </div>
                  <div className="w-full  xl:w-[100%]">
                    <label className="block mb-1 text-[#444748] font-medium">
                       Confirm Password
                    </label>

                    <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full border border-[#C4C7C7] py-2 p-2 rounded focus:border-black focus:outline-none"
                    />
                </div>
                 



                {/* Top row: label + forget password */}
              
                <div className="flex items-center gap-2 w-full">

                    <input
                        type="checkbox"
                        id="remember"
                        className="w-4 h-4 cursor-pointer accent-black"
                    />

                    <label
                        htmlFor="remember"
                        className="text-sm text-[#444748] cursor-pointer"
                    >
                        Remember Me
                    </label>

                </div>

                <button className="w-full h-[50px] bg-black text-white py-5 p-2 flex justify-center items-center cursor-pointer rounded">
                    ENTER ELYSIAN
                </button>

             <div className="flex justify-center items-center lg:me-9 mt-10 ">
                <hr className="  w-[70%] flex bg-[#C4C7C7]  h-[1px] text-[#C4C7C7]" />
            </div>
            <div className=" w-[100%] md:w-full  xl:w-[90%] max-w-md space-y-2 gap-4 flex flex-col p-6 justify-center items-center" >


                <div className="flex justify-center gap-2 tracking-[2px] mt-3 text-[#1A1C1A] items-center">
                    <img src="/Container.png" alt="" />
                    <p className="text-[#1A1C1A] text-[10px]">SECURE ENCRYPTION PROTOCOL</p>

                </div>
                {/* <div className="flex gap-2">
                <img src="/Google.png" alt="" />
                <p className="text-[#1A1C1A] text-xs">Continue with Google</p>
               </div> */}
                <p className=" text-sm text-[#444748] mt-3">By continuing, you agree to our <span className="border-b-1 border-black">Terms of Service</span>.</p>
            </div>


            
            </form>
           
        </div>
  );
}