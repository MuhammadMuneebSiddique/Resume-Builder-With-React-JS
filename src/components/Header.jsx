import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';


const Header = ({hidden}) => {

    const [menu, setMenu] = useState(false)


  return (
    <header className={`header ${hidden ? hidden : ""} text-[10px] px-[6rem] py-[2rem]`}>
        <div className='desktop-header flex justify-between items-center '>        
            <div>
                <Link to="/" className='text-[3em] font-semibold font-poppin'>Resume Builder</Link>
            </div>
            <ul className='flex justify-center items-center gap-[3em] capitalize font-poppin font-medium text-[1.7em]'>
                <li><Link to="/">home</Link></li>
                <li><Link to="/components/AboutPage">About</Link></li>
                <li><Link to="/components/ResumeForm">Create Resume</Link></li>
                <li><Link to="/components/ContactSection">Contact us</Link></li>
            </ul>
        </div>
        <div className="mobile-header hidden justify-between relative items-center">
            <div>
                <Link to="/" className='text-[3em] font-semibold font-poppin'>Resume Builder</Link>
            </div>
            <div>
                <IoMenu className={`text-[3em] ${menu ? "hidden" : ""}`} onClick={() => setMenu(!menu)} />
                <IoMdClose className={`text-[3em] ${menu ? "" : "hidden"}`} onClick={() => setMenu(!menu)} />
            </div>
            <ul className={`flex bg-white flex-col absolute left-[-2em] w-[15em] px-[2em] py-[2em] h-screen top-[2.15em] gap-[3em] capitalize font-poppin font-medium  text-[3em] ${menu ? "" : "hidden"} `}>
                <li><Link to="/">home</Link></li>
                <li><Link to="/components/AboutPage">About</Link></li>
                <li><Link to="/components/ResumeForm">Create Resume</Link></li>
                <li><Link to="/components/ContactSection">Contact us</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Header