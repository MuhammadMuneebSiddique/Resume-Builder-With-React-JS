
import React from 'react'
import image_02 from "/src/assets/9405402_4162928.jpg"  
import image_03 from "/src/assets/3D Approved Document With Avatar And Checkmark.png"
import image_04 from "/src/assets/3D Increased Customer Illustrated With Three Customers And Increase Arrow.png"
import image_05 from "/src/assets/3D Layout Design And Pencil.png"
import image_06 from "/src/assets/Online Course.png"
import image_07 from "/src/assets/Research And Development.png"
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

function AboutPage() {

    const mainFeatures = [
            {head:"Proven CV Templates to increase Hiring Chance" , image:image_04 , description:"Proven CV templates highlight skills and experience, with designs like Modern Professional for clarity and Creative CV for showcasing originality. Tailor your CV to the role to increase hiring chances."},
            {head:"Creative, Modern and Clean Templates Design" , image:image_05 , description:"Creative templates use bold designs for creative roles, while Modern and Clean templates offer sleek, simple layouts for professional clarity. These templates help highlight key skills and experience in a visually appealing way."},
            {head:"Easy and Intuitive Online CV and Resume Builder" , image:image_06 , description:"An easy and intuitive online CV builder allows users to quickly create professional resumes with customizable templates, drag-and-drop features, and simple editing tools, making it accessible for anyone, regardless of design experience."},
            {head:"Free to use. Developed by hiring professionals" , image:image_07 , description:"A free-to-use CV builder, developed by hiring professionals, provides expert-designed templates and tools to help you create a standout resume. It also offers guidance on crafting impactful content."},
            {head:"Recruiter Approved Phrases with Module Notification" , image:image_03 , description:"Proven CV templates highlight skills and experience, with designs like Modern Professional for clarity and Creative CV for showcasing originality. Tailor your CV to the role to increase hiring chances."},
            {head:"Fast Easy CV and Resume Formatting" , image:image_04 , description:"Fast, easy CV and resume formatting allows you to quickly organize and style your resume with customizable templates, ensuring a professional appearance without the hassle of manual formatting."},
        ]

  return (
    <>
    <Header />
    <section className='py-[10rem] px-[6rem]'>
        <div className='flex justify-center items-center w-full'>
            <h2 className='text-[5rem] font-semibold font-poppin capitalize' >About</h2>
        </div>
        <div className='section-04 py-[5em] px-[6em]'>
            <div className="sec-04-left-side flex justify-center gap-[5em] items-center">
                <div>
                    <img src={image_02} className='about-img w-[60em]' alt="image" />
                </div>
                <div className='sec-04-right-side w-[60em] py-[3em] flex flex-col justify-between' >
                    <h2 className='text-[2.5em] font-inter capitalize font-medium' >Why Choose Our Platform?</h2>
                    <p className='text-[1.5em] py-[1em] font-poppin font-normal '>Our platform offers an intuitive and user-friendly resume builder that simplifies the process of creating professional, recruiter-approved resumes. With customizable templates, real-time guidance, and industry-specific phrases, it helps you craft a standout resume that highlights your skills and achievements effectively.</p>
                    <Link to="/components/ResumeForm"><button type="button" className='w-fit my-[2em] text-[1.5em] capitalize py-[1em] px-[2em] rounded-[3em] bg-[#1A91F0] text-[#fff] font-poppin font-medium' >Lets Build your CV</button></Link>
                </div>
            </div>
            <div className="sec-02-left-side flex-wrap flex justify-center gap-[7em] py-[5em]">
                    <div className='w-[30em] '>
                        <div>
                            <h3 className='text-[1.7em] py-[0.3em] font-medium font-poppin capitalize'>Easy Online Resume Builder</h3>
                            <p className='text-[1.3em] font-normal font-poppin capitalize'>"Easy Online Resume Builder" is a simple tool to create professional resumes quickly with templates and customization options, making job applications effortless, saving time, and ensuring a polished resume.</p>
                        </div>
                    </div>
                    <div className='w-[30em] '>
                        <div>
                            <h3 className='text-[1.7em] py-[0.3em] font-medium font-poppin capitalize'>Step by Step Expert Tips</h3>
                            <p className='text-[1.3em] font-normal font-poppin capitalize'>"Guided Professional Advice" provides clear, step-by-step tips from experts to help users achieve their goals effectively and confidently.</p>
                        </div>    
                    </div>
                    <div className='w-[30em] '>
                        <div>
                            <h3 className='text-[1.7em] py-[0.3em] font-medium font-poppin capitalize'>Recruiter Approved Phrases</h3>
                            <p className='text-[1.3em] font-normal font-poppin capitalize'>"Recruiter Approved Phrases" are professionally curated words and statements that enhance resumes, making them more impactful.</p>
                        </div>
                    </div>
            </div>
        </div>    
        <div className='section-02 px-[6em] py-[10em] flex flex-col gap-[7rem]'>
            <div className='w-full flex justify-center items-center gap-[2em] flex-col'>
                <h2 className='text-[3em] capitalize font-poppin font-semibold'>Our Main Features</h2>
                <p className='text-[1.7em] font-normal text-center font-poppin w-[50em]'>Explore our main features that offer seamless user experience, cutting-edge design, and powerful functionality to meet all your needs.</p>
            </div>
            <div className='flex justify-center flex-wrap items-center gap-[7em]'>
                {mainFeatures.map((curElem,index)=>{
                    return(
                        <div key={index} className='items flex w-[52em] gap-[1em] items-center'>
                            <div className='w-[20%]'>
                                <img  src={curElem.image} className='w-[30em]' alt="image"/>
                            </div> 
                            <div className='w-[80%]'>
                                <h3 className='text-[1.5em] py-[0.5em] font-poppin font-semibold'>{curElem.head}</h3>
                                <p  className='text-[1.2em] font-normal font-poppin'>{curElem.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default AboutPage