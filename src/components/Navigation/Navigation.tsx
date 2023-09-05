'use client'; // This is a client component 👈🏽

import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './Navigation.module.css';
import Image from 'next/image';
import hamburgerIcon from '@/assets/menu-left-alt.svg';
import { rubik, urbanist } from '@/app/font';
import { Brand } from '..';
import { useDebounce } from "@uidotdev/usehooks";

interface Props {
  padding?: string;
}

export function Navigation({ padding }: Props) {
  const elRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const [prevScroll, setPrevScroll] = useState(0); // initiate isNavOpen state with false
  const debouncedScroll = useDebounce(prevScroll, 200);

  const handleScroll = () => {
    let currentScrollPosition = 0;
    currentScrollPosition = window.scrollY; // Get the new Value
    if (debouncedScroll - currentScrollPosition < 0) { //Subtract the two and conclude
      elRef.current.style.top = `-${elRef.current.clientHeight}px`;
    } else {
      elRef.current.style.top = '0px';
    }
    setPrevScroll(currentScrollPosition); // Update the previous value
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "unset";
  }, [isNavOpen]);

  return (
    <nav
      ref={elRef}
      className={`py-4 sm:py-8 shadow-sm flex justify-between 
        content-center leading-8 border-b border-[#79869F4D] z-50 
        sticky top-0 bg-white transition-all duration-500
        ${padding} ${rubik.className}`}
    >
      <Brand></Brand>
      <section className='MOBILE-MENU flex md:hidden'>
        <button
          className='HAMBURGER-ICON'
          onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
        >
          <Image src={hamburgerIcon} alt='Hamburger menu Icon' />
        </button>

        <div className={isNavOpen ? styles['showMenuNav'] : styles['hideMenuNav']}>
          <button
            className='CROSS-ICON absolute top-0 right-0 px-8 py-8'
            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg className='h-8 w-8 text-gray-600' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
              <line x1='18' y1='6' x2='6' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
          </button>
          <ul className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] text-[#79869F]'>
            <li className='border-b border-gray-400 my-8 uppercase'>
              <a href='#home' onClick={() => setIsNavOpen(false)}>
                Home
              </a>
            </li>
            <li className='border-b border-gray-400 my-8 uppercase'>
              <a href='#skills' onClick={() => setIsNavOpen(false)}>
                About
              </a>
            </li>
            <li className='border-b border-gray-400 my-8 uppercase'>
              <a href='#portfolio' onClick={() => setIsNavOpen(false)}>
                Portfolio
              </a>
            </li>
            <li className='border-b border-gray-400 my-8 uppercase'>
              <a href='#experience' onClick={() => setIsNavOpen(false)}>
                Experience
              </a>
            </li>
            <li className='border-b border-gray-400 my-8 uppercase'>
              <a href='#contact' onClick={() => setIsNavOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </section>
      <ul className='hidden md:flex content-center gap-8 text-[#79869F]'>
        <li>
          <a className='hover:text-primary-red' href='#home'>Home</a>
        </li>
        <li>
          <a className='hover:text-primary-red' href='#skills'>About</a>
        </li>
        <li>
          <a className='hover:text-primary-red' href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a className='hover:text-primary-red' href='#experience'>Experience</a>
        </li>
        <li>
          <a className='hover:text-primary-red' href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
