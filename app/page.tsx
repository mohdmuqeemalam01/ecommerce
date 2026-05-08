'use client'
import Image from "next/image";
import Navbar from './components/header'
import Homep from './components/home'
import { useContext } from 'react'
import {UserData} from './context/UserContext'
export default function Home() {
  const {ForgatPassword,SetForgatPassword}=useContext(UserData)
  return (
    <>
      <Navbar/>
      <Homep/>
    <div className="flex  justify-center gap-50 ">
     
      <a className="bg-green text-white p-2" href="/signinsignup">
        Login Page
      </a>
      <a href="/contact">
       contact page
      </a>
      <a href="/product">
        Product
      </a>
      <a href="/cart">cart</a>
      <a href="/wishlist">Wish List</a>
    


    </div>
    </>
  );
}
