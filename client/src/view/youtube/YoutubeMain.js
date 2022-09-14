import React from 'react'
import Navbar from "../components/navbar/Navbar"
import BGLogo from "../../assets/fulllogo.svg"
import Views from "../../assets/views.svg"
import Videos from "../../assets/videos.svg"
import Subscribers from "../../assets/subscribers.svg"


const YoutubeMain = () => {
  return (
    <>
        <Navbar />  
          <section className="min-h-screen w-screen relative" >
          <img style={{zIndex: "-5", position: "fixed", width: "30rem", height: "auto", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} src={BGLogo} alt="logo" />
        <div
                className="
        flex
        flex-col
        justify-center
        items-center
        mx-auto
        w-full
        rounded-lg
        pt-8"
            >
                <h1 className="text-2xl font-medium text-blue-500">YOUTUBE ANALYTICS</h1>
                <p>Search for channels and view their analytics</p>
                <div className="search w-screen grid place-items-center">
                    <div className="text-black w-full py-8 flex items-center justify-center z-20">
                          <form action="" className="w-full flex items-center justify-center ">
                          <div className="border rounded flex md:w-1/3 sm:w-2/3 w-11/12">
                            <div className="flex items-center justify-center pl-4 border-l">
                                <svg className="h-4 text-gray-100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
                            </div>
                            <input type="text" className="px-4 py-2 border-none focus:outline-none " placeholder="Search" />
                            <button className="ml-auto flex items-center bg-purp-100 text-white justify-center px-6 border-l">
                                Search
                            </button>
                          </div>
                      </form>
                    </div>
                </div>
                  <div className="results rounded bg-white md:w-8/12 w-11/12 min-h-96 px-8 py-8 flex flex-col items-center shadow-md">
                    <div className="profile w-full flex flex-col items-center">
                          <img className="border rounded-full w-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpoQ32SFkBJf5Ir-9zAxOR4HriO6oGKfLeTg&usqp=CAU" alt="thumb" />
                          <h1 className="pt-4 text-xl">Furr Hair</h1>
                          <p className="w-96 text-center py-4 text-sm">The hair is made up of 95% keratin, a fibrous, helicoidal protein (shaped like a helix) that forms part of the skin and all its appendages (body hair, nails, etc.)</p>
                          <div className="country flex flex-col items-center">
                            <span className="text-xs">Country</span>
                            <span className="dot"></span>
                            <span className="py-1 font-bold">South Africa</span>
                          </div>
                    </div>
                    <div className="basic-stats flex items-center justify-around md:w-8/12 w-full py-8">
                        <div className="item flex flex-col items-center">
                            <img src={Views} alt="" className="icon w-12" />
                            <div className="name py-2 text-sm">Total Views</div>
                            <div className="number text-3xl font-bold text-blu-100">20m</div>
                        </div>
                        <div className="item flex flex-col items-center">
                            <img src={Subscribers} alt="" className="icon w-12" />
                            <div className="name py-2 text-sm">Subscribers</div>
                            <div className="number text-3xl font-bold text-blu-100">20k</div>
                        </div>
                        <div className="item flex flex-col items-center">
                            <img src={Videos} alt="" className="icon w-12" />
                            <div className="name py-2 text-sm">Videos</div>
                            <div className="number text-3xl font-bold text-blu-100">152</div>
                        </div>
                    </div>
                </div>
            </div>

          </section> 
    </>
  )
}

export default YoutubeMain