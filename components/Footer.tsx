import React from 'react'
import st from './Navbar.module.css';

const Footer = () => {
  return (
    <>
        <div className='w-full bg-brown pb-[1.5vw] pt-[3.5vw] px-[2.5vw]'>
            <div className='sec-1 flex flex-wrap sm:text-[1.3vw] xs:text-[4vw] pb-[2.5vw] text-white font-semibold'>
                <div className='sm:w-[50%] xs:w-full xs:mb-[4vw]'>
                    <h5>SALES GALLERY</h5>
                    <h5>53 WEST 53RD STREET</h5>
                    <h5>NY 10019</h5>
                </div>
                <div className='sm:w-[50%] xs:w-full'>
                    <h5>12126885300</h5>
                    <h5>info@53west53.com</h5>
                </div>
            </div>
            <div className='sec-1 flex justify-between pb-[2.8vw] text-[1.3vw] text-white pt-[2.5vw] xs:hidden sm:flex'>
                <div className='50% flex flex-col justify-between'>
                    <h5>PRESS</h5>
                    <button className="underlinee">See All Press</button>
                </div>
                <div className='w-[50%]'>
                    <h5>“The dramatic 82-storey structure dominates the skyline, elegantly asserting its presence; and stepping inside, the experience is no less impressive.”</h5>
                    <h5>— Wallpaper</h5>
                </div>
            </div>
            <div className='flex justify-between pb-[2.8vw] text-[1.3vw] text-white pt-[2.5vw] xs:hidden sm:flex'>
                <div className='50%'>
                    <h5>INFO</h5>
                </div>
                <div className='w-[50%] flex justify-between pr-[15vw]'>
                    <div className='flex flex-col w-[12%]'>
                        <h5>Design</h5>
                        <h5>Residences</h5>
                        <h5>Amenities</h5>
                        <h5>Neighborhood</h5>
                    </div>
                    <div className='flex flex-col w-[12%]'>
                        <h5>Gallery</h5>
                        <h5>Availability</h5>
                        <h5>Team</h5>
                    </div>
                    <div className='flex flex-col w-[12%]'>
                        <h5>Instagram</h5>
                        <h5>Facebook</h5>
                    </div>
                </div>
            </div>
            <a className="text-white flex justify-center items-center md:hidden sm:hidden xs:flex xs:justify-center w-full xs:pt-[2vw]" href="#">Back to top</a>
            <img className='object-cover mt-[3.3vw]' src="https://53w53.com/logo.svg" alt="" />
            <div className='flex justify-between text-white pt-[1.5vw] sm:text-[1.3vw] xs:text-[2.5vw] xs:pt-[3vw]'>
                <h5>Copyright © 53west53 / Legal Notice</h5>
                <a className='sm:block xs:hidden' href='#'>Back to top</a>
                <h5>Fair Housing Notice / Standard Operating Procedures</h5>
            </div>
        </div>
    </>
  )
}

export default Footer
