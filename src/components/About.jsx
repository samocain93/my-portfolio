import React from 'react';

export default function About() {
  return (
    <section id='about'>
      <div className='container mx-auto flex px-10 py-10 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-14 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
            Hi, I'm <span className='text-green-400 text-5xl'>Sam</span>.
            <br className='hidden lg:inline-block' /> I love to build amazing
            <span className='text-green-400'> things</span>.
            <br />
            Let's make something great
            <span className='text-green-400'> together</span>.
          </h1>
          <p className='mb-8 leading-relaxed'>
            I'm a full stack developer looking to take my career to the next
            step. I'm passionate about learning, and always seeking to
            grow and expand my skillset. As a recent graduate of{' '}
            <a
              className='text-white'
              href='https://techbootcamps.utexas.edu/coding/'
              target="_blank"
            >
              The Coding Bootcamp at UT Austin
            </a>
            , I am ready to take on this next stage of my journey, and join
            alongside an exciting company.
          </p>
          <div className='flex justify-center'>
            <a
              href='#contact'
              className='inline-flex text-slate-900 border-0 bg-slate-100 py-2 px-6 focus hover:bg-green-400 rounded text-lg shadow-gray-200 shadow-sm transition-shadow'
            >
              Work With Me
            </a>
            <a
              href='#projects'
              className='ml-4 inline-flex text-slate-900 bg-slate-100 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg shadow-green-200 shadow-sm'
            >
              View My Work
            </a>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            className='object-cover object-center rounded-full w-auto shadow-xl border-opacity-80 drop-shadow-lg'
            alt='logo'
            src='./src/assets/images/logo.jpeg'
          />
        </div>
      </div>
    </section>
  );
}
