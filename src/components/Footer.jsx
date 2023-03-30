import React from 'react';
import { BsLinkedin, BsGithub, BsLink, BsGit } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className='footer bg-gray-900'>
      <div className='footer__links container flex flex-wrap flex-row p-5 items-center justify-center mx-auto md:justify-evenly'>
        <a href='#about'>
          <p className='footer__text text-xl hover:text-white mr-3'>
            Sam O'Cain
          </p>
        </a>

        <a
          href='https://www.linkedin.com/in/samocain/'
          className='ml-3 mr-3 text-2xl hover:text-white'
          target='_blank'
        >
          <BsLinkedin />
        </a>
        <a
          href='https://github.com/samocain93'
          target='_blank'
          className='ml-3 mr-3 text-2xl hover:text-white'
        >
          <BsGithub />
        </a>
      </div>
    </footer>
  );
}
