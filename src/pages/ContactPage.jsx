import { LuMail } from "react-icons/lu";
import { FaGithub , FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { NormalInputFields } from "../components/inputFields";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { BsFillSendFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";

export default function ContactSection() {

    const [isHidden , setIsHidden] = useState(false)
    const [userMessage , setUserMessage] = useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })

    const handleGetData = (e) =>{
        let {name , value} = e.target
        setUserMessage({...userMessage , [name]:value})
    }

    const handleSendMessage = () => {
        setTimeout(()=>{
            setIsHidden(false)
        },2700)
        console.log(userMessage)
        setIsHidden(!isHidden)
    }


  return (
    <>
    <Header />
    <section className="contact-section py-[10rem] px-[6rem] flex justify-center items-center font-poppin text-[10px] gap-[4rem]">
        <section className="p-[1rem] flex justify-center gap-[3em] flex-col">
            <div>
                <h2 className="text-[3.5em] font-bold my-[0.5em]">Let's Talk</h2>
                <p className="text-gray-600 text-[1.7em] my-[0.5em]">
                    Have some big idea or brand to develop and need help? <br />
                    Then reach out we&apos;d love to hear about your project and provide help.
                </p>
            </div>
            <div className="my-[1em]">
                <h3 className="text-[3em] font-semibold my-[0.5em]">Email</h3>
                <div className="flex items-center gap-[1em] text-blue-500">
                <div className="bg-blue-100 p-[1.4em] rounded-full">
                    <LuMail className="w-[4em] h-[4em]" />
                </div>
                <div className="text-left">
                    <p className="text-[1.7em] text-gray-500">Mail</p>
                    <a href="mailto:info@example.com" className="text-blue-600 text-[1.5em] font-semibold hover:underline">
                    siddiquimuneeb894@gmail.com
                    </a>
                </div>
                </div>
            </div>

            <div>
                <h3 className="text-[3em] font-semibold my-[0.5em] font-poppin ">Socials</h3>
                <div className="flex items-center gap-[3em]">
                <a href="https://github.com/MuhammadMuneebSiddique" target="_blank" className="bg-gray-100 p-[1em] rounded-full hover:bg-blue-100 transition">
                    <FaGithub className="text-blue-500 w-[4em] h-[4em]  " />
                </a>
                <a href="https://linkedin.com/in/muhammad-muneeb-6a5a86323" target="_blank" className="bg-gray-100 p-[1em] rounded-full hover:bg-blue-100 transition">
                    <FaLinkedinIn className="text-blue-500 w-[4em] h-[4em] " />
                </a>
                <a href="#" target="_blank"  className="bg-gray-100 p-[1em] rounded-full hover:bg-blue-100 transition">
                    <FaInstagram className="text-blue-500 w-[4em] h-[4em] " />
                </a>
                </div>
            </div>
        </section>
        <section className="right-side flex justify-center items-center relative w-[50%]">
            <div className="w-full">
                <NormalInputFields width={"100%"} value={userMessage.name} name={"name"} setValue={handleGetData} type={"text"} placeholder={"Name"} />
                <NormalInputFields width={"100%"} value={userMessage.email} name={"email"} setValue={handleGetData} type={"text"} placeholder={"Email"} />
                <NormalInputFields width={"100%"} value={userMessage.subject} name={"subject"} setValue={handleGetData} type={"text"} placeholder={"Subject"} />
                <textarea placeholder="Message" onChange={(e) => handleGetData(e)} name="message" value={userMessage.message} className="w-[100%] h-[10em] rounded-sm bg-[#F1F5F9] my-[1.5em] border-[#838FA0]  p-[0.7em] text-[1.5em]"></textarea>
                <button onClick={handleSendMessage} type="button" className='w-full text-[2em] capitalize py-[0.5em] px-[2.5em] rounded-[0.5em] bg-[#3B82F6] hover:bg-[#1A91F0] text-[#fff] font-poppin font-medium'>send</button>
            </div>
            <div className={`notify flex justify-center gap-[1em] transition-all ${isHidden ? "" : "hidden"} shadow-lg absolute items-center bg-white py-[2.5em] rounded-[1em] px-[3em] `}>
                    <BsFillSendFill className="text-[3em] text-[#59B259]"/> 
                <h2 className="text-[3em] text-[#000] font-semibold" >Message Send Successfully</h2>
            </div>
        </section>
    </section>
    <Footer />
    </>
  );
}
