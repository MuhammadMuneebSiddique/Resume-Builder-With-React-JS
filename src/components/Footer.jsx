import React from 'react'

const Footer = ({hidden}) => {
  return (
    <footer className={`footer ${hidden ? hidden : ""} text-[10px] px-[6rem] flex flex-col gap-[4em] py-[4rem]`}>
        <div className='container flex justify-between flex-wrap gap-[3em]' >
            <div className='item-01 w-[40em]'>
                <a href="/" className='text-[3em] font-poppin capitalize font-semibold'>Resume Builder</a>
                <p className='text-[1.7em] font-normal py-[1em] font-inter'>Our Perfect resume builder takes the hassle out of resume writing. Choose from several templates and follow easy prompts to create the perfect job-ready resume.</p>    
            </div>
            <div className='flex flex-col gap-[1.5em]'>
                <h4 className='text-[2em] font-poppin font-semibold' >PRIVACY & TOS</h4>
                <div className='text-[1.6em] flex flex-col gap-[0.5em] font-poppin font-medium' >
                    <p><a href="">Advertiser Agreement</a></p>
                    <p><a href="">Advertiser Agreement</a></p>
                    <p><a href="">Privacy Policy</a></p>
                    <p><a href="">Technology Privacy</a></p>
                    <p><a href="">Developer Agreement</a></p>
                </div>    
            </div>
            <div className='flex flex-col gap-[1.5em]'>
                <h4 className='text-[2em] font-poppin font-semibold'>NAVIGATE</h4>
                <div className='text-[1.6em] flex flex-col gap-[0.5em] font-poppin font-medium' >
                    <p><a href="">Advertisers</a></p>
                    <p><a href="">Developers</a></p>
                    <p><a href="">Resources</a></p>
                    <p><a href="">Company</a></p>
                    <p><a href="">Connect</a></p>
                </div>    
            </div>
            <div className='flex flex-col gap-[1.5em]'>
                <h4 className='text-[2em] font-poppin font-semibold'>CONTACT US</h4>
                <div className='text-[1.6em] flex flex-col gap-[0.5em] font-poppin font-medium' >
                    <p><a href="">2354354545</a></p>
                    <p><a href="">mksdgjsh@gmail.com</a></p>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <p className='text-[1.7em] font-medium font-poppin text-center'>&copy; 2024 Resume Builder . All Right Reserved | Design by Muhammad Muneeb</p>    
        </div>
   </footer>
  )
}

export default Footer