import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/solid';
import resume from '../assets/pdf/resume.pdf';
import { Document, Page } from 'react-pdf';

export default function Resume() {
  return (
   <section id="resume" className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-6 mx-auto text-center lg-px-40">
        <div className="flex flex-col mb-20">
        <AcademicCapIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium  title-font mb-4 text-white">
            Resume
        </h1>
        <div>
        <Document file="../assets/pdf/resume.pdf">
            <Page pageNumber={1} />
        </Document>
        </div>
     
        </div>
    </div>

   </section>
  )
}
