import React from 'react';
import { HomeIcon, ArrowRightIcon } from '@heroicons/react/solid';
import {BsFillMoonStarsFill} from 'react-icons/bs';


export default function Navbar() {
  return (
    <header className='bg-gray-900 md:sticky top-0 z-10'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a className='title-font font-medium text-white mb-4 md:mb-0'>
          <a href='#about' className='ml-3 text-xl'>
            Sam O'Cain
          </a>
        </a>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center'>
          <a href='#projects' className='mr-5 ml-5 hover:text-white hover:scale-105'>
            Projects
          </a>
          <a href='#skills' className='mr-5 hover:text-white hover:scale-105'>
            Skills
          </a>
          <li className="inline-flex hover:cursor-pointer hover:text-amber-200 hover:scale-105"><BsFillMoonStarsFill /></li>
        </nav>
        <a
          href='#contact'
          className='inline-flex items-center hover:text-white border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0'
        >
          Let's Work Together
          <ArrowRightIcon className='w-4 h-4 ml-1 hover:text-white' />
        </a>
      </div>
    </header>
  );
}
