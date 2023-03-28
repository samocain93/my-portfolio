import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/solid';
import { Document, Page } from 'react-pdf';
import resume1 from '../assets/images/resume1.png';
import resume2 from '../assets/images/resume2.png';
import resume from '../assets/pdf/resume.pdf'

export default function Resume() {
  return (
    <section id='resume' className='text-gray-400 bg-gray-900 body-font'>
      <div className='container px-5 py-6 mx-auto text-center lg-px-40'>
        <div className='flex flex-col mb-20'>
          <AcademicCapIcon className='mx-auto inline-block w-10 mb-4' />
          {/* <a href="https://docs.google.com/document/d/1rTCYJWahFMkvd4iSxxIYdGw0Q3Q_lmC7p45AIldxz94/edit?usp=sharing" target="_blank"> */}
          <a href={resume} target="_blank">
          <h1 className='sm:text-4xl text-3xl font-medium  title-font mb-4 text-white hover:text-green-400'>
            Resume
          </h1>
          </a>
      
          <div className="flex flex-row flex-wrap mx-auto justify-center">
            <img alt="resume image" src={resume1} className="mb-0 justify-center lg:max-w-xl max-h-full p-3 md:max-w-screen-md" />
            <img alt="second page of resume" src={resume2} className="mb-0 justify-center lg:max-w-xl max-h-full p-3 md:max-w-screen-md" />
            
          </div>
        </div>
      </div>
    </section>
  );
}
