import React, { useState } from 'react'

export default function About() {

    const [mystyle,setmystyle]=useState({
        color:"black",
        backgroundColor:"black"
    })
    const [headstyle,setheadstyle]=useState({
        color:"white",
        backgroundColor:"black"
    })
    const[btntext,setbtntext]=useState("Enable Light Mode")
    const togglestyle=()=>{
        if(mystyle.color ==='black'){
            setmystyle({
                color:"white",
                backgroundColor:"white"
            })
            setbtntext("Enable Dark Mode")
        }
        else{
            setmystyle({
                color:"black",
                backgroundColor:"black"
            })
            setbtntext("Enable Light Mode")
        }
        if(headstyle.color ==='white'){
            setheadstyle({
                color:"black",
                backgroundColor:"white"
            })
            setbtntext("Enable Dark Mode")
        }
        else{
            setheadstyle({
                color:"white",
                backgroundColor:"black"
            })
            setbtntext("Enable Light Mode")
        }
    }

   
    
  return (
    <>
    <div className="flex items-center justify-center flex-col bg-[#E5E5E5] min-h-screen" style={mystyle}>
  {/* main card */}
        <h1 className="heading text-5xl m-5 " style={headstyle}>About us</h1>
  <div className="bg-[#F4F5FA] p-10 rounded-xl">
    {/* headers content*/}
    <div className="flex flex-col justify-center items-center text-center">
      <div className="max-w-sm font-bold font-sans">
        Get the most out of your mobile with the right subscription
      </div>
      <div className="font-light max-w-lg mt-5 text-sm">
        All devices come with free delivery or pickup as standard. See
        information on available shopping options for your location.
      </div>
    </div>
    {/* subscriptions */}
    <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10" >
      <div className="bg-[#FFFBEC] rounded-xl">
        <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto" style={headstyle}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ice_logo.svg/138px-Ice_logo.svg.png?20191213230535"
            className="w-8"
          />
          <div className="mt-3 font-semibold text-lg">Ice Mobile 10GB</div>
          <div className="text-sm font-light">Up to 100Mbit/s</div>
          <div className="my-4">
            <span className="font-bold text-base">299,-</span>
            <span className="font-light text-sm">/month</span>
          </div>
          <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4" style={headstyle}>
            Add subscription
          </button>
        </div>
      </div>
      <div className="bg-[#F9ECFF] rounded-xl">
        <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto" style={headstyle}>
          <img
            src="https://www.dstny.se/app/uploads/telia_pp_rgb.png.webp"
            className="w-12"
          />
          <div className="mt-3 font-semibold text-lg">Telia Mobil 15GB</div>
          <div className="text-sm font-light w-60 md:w-auto">
            Unlimited calls
          </div>
          <div className="my-4">
            <span className="font-bold text-base">953,-</span>
            <span className="font-light text-sm">/month</span>
          </div>
          <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4" style={headstyle}>
            Add subscription
          </button>
        </div>
      </div>
      <div className="bg-[#ECEEFF] rounded-xl">
        <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto" style={headstyle}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Telenor_Logo.svg/1600px-Telenor_Logo.svg.png"
            className="w-12"
          />
          <div className="mt-3 font-semibold text-lg">Telenor Next Fast</div>
          <div className="text-sm font-light w-60 md:w-auto">
            Up to 100Mbit/s
          </div>
          <div className="my-4">
            <span className="font-bold text-base">1028,-</span>
            <span className="font-light text-sm">/month</span>
          </div>
          <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4" style={headstyle}>
            Add subscription
          </button>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <button className="mt-12 bg-slate-900 text-white px-4 rounded-full py-3">
        See all subscriptions
      </button>
    </div>
  </div>

<div className='flex justify-center m-12 text-xl '>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={togglestyle}>
 {btntext}
</button>
</div>
</div>
    </>
  )
}
