import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../../../assets/logo.svg"

const Navbar = () => {
    return (
        <>
            <nav
                className="
                flex flex-wrap
                items-center
                justify-between
                w-full
                py-4
                md:py-0
                md:px-24
                px-8
                h-16
                text-lg text-gray-700
                bg-white
                shadow
                "
            >
                    <Link className="flex gap-5 items-center" to="/">
                        <img className="w-8" src={Logo} alt="logo" />
                        <h1 className="text-xl font-bold">ADUDENT</h1> 
                    </Link>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="menu-button"
                    className="h-6 w-6 cursor-pointer md:hidden block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>

                <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                    <ul
                        className="pt-4
                            text-base text-gray-700
                            md:flex
                            md:justify-between 
                            md:pt-0">
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-purple-400" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-purple-400" to="/">Products</Link>
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-purple-400" to="/">Contact Us</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar