import React, { useState } from 'react';
import Iframe from 'react-iframe';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function encode(data) {
    return Object.keys(data)
      .map((key) => {
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
      })
      .join('&');
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => alert('Thank you! Message sent.'))
      .catch((error) => alert(error));
  }

  return (
    <section id='contact' className='relative'>
      <div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
        <div className='lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative'>
          <iframe
            width='100%'
            height='100%'
            title='map'
            className='absolute inset-0'
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: 'opacity(0.7)' }}
            src='https://www.google.com/maps/embed/v1/place?q=Austin,+TX,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
          />
          <div className='bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md'>
            <div className='lg:w-1/2 px-6'>
              <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                ADDRESS
              </h2>
              <p className='mt-1'>S 1st St Austin, TX 78704</p>
            </div>
            <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
              <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                EMAIL
              </h2>
              <a className='text-green-400 leading-relaxed'>
                samocain93@gmail.com
              </a>
              <h2 className='title-font font-semibold text-white tracking-widest text-xs mt-4'>
                PHONE
              </h2>
              <p className='leading-relaxed'>850-559-4306</p>
            </div>
          </div>
        </div>
        <form
          netlify='true'
          name='contact'
          className='lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0'
        >
          <h2 className='text-white sm:text-4xl text-3xl mb-1 font-medium title-font'>
            Hire Me
          </h2>
          <p className='leading-relaxed mb-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            quasi!
          </p>
          <div className='relative mb-4'>
            <label htmlFor='name' className='leading-7 text-sm text-white'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-green-400 focus:ring-2 focus:ring-green-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='email' className='leading-7 text-sm text-white'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-green-400 focus:ring-2 focus:ring-green-400 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label
              htmlFor='message'
              className='leading-7 text-sm text-gray-400'
            >
              Message
            </label>
            <textarea
              name='message'
              id='message'
              className='w-full bg-gray-800 border rounded border-gray-700 focus:ring-2 focus:border-green-400 focus:ring-green-400 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
            ></textarea>
          </div>
          <button
            type='submit'
            className='text-slate-900 bg-slate-100 hover:bg-green-400 border-0 py-2 px-6 focus:outline-none rounded text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
