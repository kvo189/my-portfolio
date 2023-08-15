'use client'; // This is a client component 👈🏽

import { ReactNode, useState } from 'react';
import styles from './Navigation.module.css';
import Image from 'next/image';
import hamburgerIcon from '@/assets/menu-left-alt.svg';

interface Props {
  padding?: string;
}

export function Navigation({ padding }: Props) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <>
      {/* Create header component with Logo on the left Home, About me, Projects, Experience links in the middle and a "Let's talk button" on the right*/}
      <nav
        className={`relative py-4 sm:py-8 flex justify-between 
        content-center leading-8 border border-[#79869F4D] ${padding}`}
      >
        <div className='flex gap-2 items-center'>
          <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26' fill='none' className='font-urbanist'>
            <circle cx='12.7543' cy='12.7543' r='12.7543' fill='#F1665A' />
            {/* add text "K" in the middle of circle */}
            <text x='8' y='18' fill='white' fontSize='14px' fontWeight='bold'>K</text>
          </svg>
          <h1 className='text-lg sm:text-2xl font-bold'>
            Khang_<span className='text-primary-red'>Vo</span>
          </h1>
        </div>

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
            <ul className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]'>
              <li className='border-b border-gray-400 my-8 uppercase'>
                <a href='/about'>About</a>
              </li>
              <li className='border-b border-gray-400 my-8 uppercase'>
                <a href='/portfolio'>Portfolio</a>
              </li>
              <li className='border-b border-gray-400 my-8 uppercase'>
                <a href='/contact'>Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className='hidden md:flex content-center gap-8 text-[#79869F]'>
          <ul>
            <a className='text-primary-red font-bold' href=''>
              Home
            </a>
          </ul>
          <ul>
            <a href=''>About me</a>
          </ul>
          <ul>
            <a href=''>Projects</a>
          </ul>
          <ul>
            <a href=''>Experience</a>
          </ul>
        </ul>
      </nav>
    </>
  );
}