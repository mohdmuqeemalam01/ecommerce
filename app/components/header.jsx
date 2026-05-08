'use client'

import { GoHome } from "react-icons/go";
import { MdOutlineLocalOffer } from "react-icons/md";
import { CgBox } from "react-icons/cg";
import { LuLightbulb } from "react-icons/lu";

import { useState } from "react";
import { Menu, X, Search, Phone, User, Heart, ShoppingCart } from "lucide-react";
import { LiaBedSolid } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Poppins } from 'next/font/google';
 
const popins=Poppins({
    subsets:['latin'],
      weight: ['300', '400', '500', '600', '700'],
})




export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className={`w-full ${popins.className}`}>

            {/* Top bar */}
            <div className=" text-sm px-4 py-2 flex justify-between items-center">
                <p className="hidden md:flex items-center gap-2">
                    <MdOutlineLocalOffer className="text-[#27A770] h-[13px] w-[13px]" />
                    <span>
                        Only this week <span className="text-red-500">-20%</span> For all Sofas and Couches
                    </span>
                </p>
                <div className="flex gap-4 text-[#52525B] text-sm">
                    <a href="#" className="hidden md:block">About Us</a>
                    <a href="#" className="hidden md:block">Blog</a>
                    <a href="/contact" className="hidden md:block border-r pr-2">Contact</a>
                    <div className="flex flex-row gap-2 ">
                        <a href="#" className="flex ">English<span className=" py-1 "><RiArrowDropDownLine className="h-[15px] w-[20px]" /></span></a>
                        <a href="#" className="flex ">$ USD<span className=" py-1 "><RiArrowDropDownLine className="h-[15px] w-[20px]" /></span> </a>

                    </div>
                </div>
            </div>

            {/* Main navbar */}
            <div className="flex items-center justify-between px-4 py-3">

                {/* LEFT */}
                <div className="flex items-center gap-6">



                    {/* Logo */}
                    <div className="flex items-center gap-2 font-bold text-lg">
                        <div className="bg-[#27A770] text-white p-2 rounded"><GoHome className=" h-[40px] w-[40px]" /></div>
                        <span className="text-[22px]  font-bold ">COZY <br /> CORNER</span>
                    </div>

                    {/* CENTER MENU (Desktop only) */}
                    <div className="hidden md:flex gap-6 flex  items-center justify-items-start text-[15px] text-[#3F3F46]">
                        <a href="#" className="flex   items-center gap-2 justify-center"> <span><CgBox /></span> Products</a>
                        <a href="#" className="flex  items-center gap-2 justify-center"> <span><LiaBedSolid /></span>Rooms</a>
                      <a href="#" className="flex  items-center gap-2 justify-center"> <span><LuLightbulb /></span>Inspirations</a>
                       <a href="#" className="flex  items-center gap-2 justify-center"> <span></span>Offers &<br /> promotions</a>
                    </div>

                </div>


                {/* RIGHT */}
                {/* <div className="flex items-center gap-4"> */}
                {/* Search */}
                <div className="hidden h-[44px]  lg:flex items-center border border-[#E7E5E4] rounded-2xl px-3 py-1">
                   
                    <input
                        className="outline-none ml-2 h-[42px] bg-[#FAFAF9] text-sm"
                        placeholder="Search for products"
                    />
                     <Search size={16} className="text-[#A1A1AA]" />
                </div>
                

                {/* Phone */}
                <div className="hidden md:block lg:flex items-center gap-2 border- text-sm">
                    <Phone size={16} />
                    <p> <span>Need Help?</span> <br /> +1-202-555-0172</p>
                </div>
               <div className="hidden lg:block w-[1px] h-10 bg-gray-300"></div> 

                {/* Icons */}
                {/* <div className="flex flex-row  gap-5"> */}
                    <User size={20} />
                    <Heart size={20} />
                    <ShoppingCart size={20} />
                {/* </div> */}



                {/* Mobile menu button */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
                {/* </div> */}
            </div>

            {/* Bottom menu (desktop) */}
            <div className="hidden md:flex gap-6 px-4 py-2 text-[#27272A] text-[#14px] text-sm text-gray-700">
                <a  href="#" className="flex items-center">Pages <RiArrowDropDownLine className="h-[15px] w-[20px]" /></a>
                  <a href="#" className="flex items-center">Desks<RiArrowDropDownLine className="h-[15px] w-[20px]" /></a>
                  <a href="#" className="flex items-center">Chairs<RiArrowDropDownLine className="h-[15px] w-[20px]" /></a>
                  <a href="#" className="flex items-center">Sofas and Couches<RiArrowDropDownLine className="h-[15px] w-[20px]" /></a>
                  <a href="#" className="flex items-center">Meeting tables<RiArrowDropDownLine className="h-[15px] w-[20px]" /></a>
                  <a href="#">Lighting</a>
                  <a href="#" >Miscellaneous</a>
                <a href="#">Office Accessories</a>
                <a href="#" className="text-red-500">Sale</a>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden px-4 pb-4 space-y-3 text-gray-700 border-t">
                    <p className="flex items-center gap-1"><CgBox />Products</p>
                    <p className="flex items-center gap-1"><LiaBedSolid /> Rooms</p>
                    <p className="flex items-center gap-1"> <LuLightbulb />Inspirations</p>
                    <p>Offers & promotions</p>
                    <hr />
                    <p>Pages</p>
                    <p>Desks</p>
                    <p>Chairs</p>
                    <p>Sofas</p>
                    <p className="text-red-500">Sale</p>
                </div>
            )}
        </div>
    );
}