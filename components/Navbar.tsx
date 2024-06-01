'use client'
import React, { useState, useEffect } from 'react';
import st from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {isMobile ? (
        <nav className="absolute top-0 left-0 w-full flex items-center justify-between font-sans text-lg h-[8vh] z-40">
          <div className="pl-7 text-white cursor-pointer font-semibold">Logo</div>
          <div className={`mr-7 cursor-pointer text-white font-semibold ${st.underline}`} onClick={toggleMenu}>
            Menu
          </div>
          {menuOpen && (
            <div className="fixed inset-0 bg-[rgb(138,108,96)] z-50 flex flex-col items-center justify-center">
              <div className='nav-pt1 flex justify-between w-full px-5 text-white absolute top-4'>
                <Link href="#" passHref>
                  <button className={st.underline} onClick={toggleMenu}>Inquire</button>
                </Link>
                <button className={st.underline} onClick={toggleMenu}>Close</button>
              </div>
              <div className='nav-pt2 uppercase flex flex-col h-full space-y-[4vh] md:text-[5vw] sm:text-[7vw] text-[8vw] font-dg'>
                <Link href="#" passHref>
                  <div className="underline3" onClick={toggleMenu}>Design</div>
                </Link>
                <Link href="#" passHref>
                  <div className="underline3" onClick={toggleMenu}>Residences</div>
                </Link>
                <Link href="#" passHref>
                  <div className="underline3" onClick={toggleMenu}>Penthouses</div>
                </Link>
                <Link href="#" passHref>
                  <div className="underline3" onClick={toggleMenu}>Amenities</div>
                </Link>
                <Link href="#" passHref>
                  <div className="underline3" onClick={toggleMenu}>Neighborhood</div>
                </Link>
                <Link href="#" passHref>
                  <div className="underline3" onClick={toggleMenu}>Gallery</div>
                </Link>
                <Link href="#" passHref>
                  <div className="underline3" onClick={toggleMenu}>Availability</div>
                </Link>
              </div>
            </div>
          )}
        </nav>
      ) : (
        <nav className="absolute top-0 left-0 w-full flex items-center font-sans text-lg justify-between h-20 z-40">
          <div className="flex space-x-10 pl-[2.5%] text-white">
            <Link href="#" passHref>
              <div className={st.underline}>Design</div>
            </Link>
            <Link href="#" passHref>
              <div className={st.underline}>Residences</div>
            </Link>
            <Link href="#" passHref>
              <div className={st.underline}>Penthouses</div>
            </Link>
            <Link href="#" passHref>
              <div className={st.underline}>Amenities</div>
            </Link>
          </div>
          <div className="flex-grow flex justify-center">
            <h5 className='text-white text-[2.3vw]'>53WEST53</h5>
          </div>
          <div className="flex space-x-10 pr-[2.5%] text-white">
            <Link href="#" passHref>
              <div className={st.underline}>Neighborhood</div>
            </Link>
            <Link href="#" passHref>
              <div className={st.underline}>Gallery</div>
            </Link>
            <Link href="#" passHref>
              <div className={st.underline}>Availability</div>
            </Link>
            <Link href="#" passHref>
              <div className={st.underline}>Inquire</div>
            </Link>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
