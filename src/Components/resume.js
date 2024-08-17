import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookOpen , faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  return (
    <div className='bg-customDarkGray border w-full rounded-b-3xl border-zinc-800 sm:max-2xl:ml-10 min-h-screen p-8 max-w-4xl'>
      <h1 className='text-yellow-400 text-3xl font-bold'>Resume </h1><hr className='mt-2 mb-4'></hr>

      <section className='mb-8'>
        <div className='flex items-center gap-4 mb-6'>
          <div className=''><FontAwesomeIcon icon={faBookOpen} className="mr-3" /></div>
          <h3 className='text-yellow-300 text-2xl font-bold'>Education</h3>
        </div>
        <ol className='ml-11 text-base'>
          <li className='relative mb-5 list-none'>
            <h4 className='font-bold mb-2 leading-6'>Riphah International University</h4>
            <span className='text-yellow-500 leading-relaxed font-normal'>2021 — 2025</span>
            <p className='max-w-2xl text-zinc-300 font-light leading-relaxed'>
              I am doing BS in Computer Science and my area of interest is web development.
            </p>
          </li>
          <li className='relative mb-5 list-none'>
            <h4 className='font-bold mb-2 leading-6'>Punjab College (cant campus rawalpindi)</h4>
            <span className='text-yellow-500 leading-relaxed font-normal'>2019 — 2020</span>
            <p className='max-w-2xl text-zinc-300 font-light leading-relaxed'>
              I have done Intermediate in Computer Science from punjab college.
            </p>
          </li>
          <li className='relative mb-5 list-none'>
            <h4 className='font-bold mb-2 leading-6'>IMCB (G-10/4)</h4>
            <span className='text-yellow-500 leading-relaxed font-normal'>2009 — 2018</span>
            <p className='max-w-2xl text-zinc-300 font-light leading-relaxed'>
              I have done my schooling from IMCB.
            </p>
          </li>          
        </ol>
      </section>

      <section className='mb-8'>
        <div className='flex items-center gap-4 mb-6'>
          <div className=''><FontAwesomeIcon icon={faBookOpen} className="mr-3" /></div>
          <h3 className='text-yellow-300 text-2xl font-bold'>Experience</h3>
        </div>
        <ol className='ml-11 text-base'>
          <li className='relative mb-5 list-none'>
            <h4 className='font-bold mb-2 leading-6'>Internee at ESFORGE Pvt. Ltd</h4>
            <span className='text-yellow-500 leading-relaxed font-normal'>June 2024 — August 2024</span>
            <p className='max-w-2xl text-zinc-300 font-light leading-relaxed'>
              It was a great experienceat at esforge it boost my learning and help me grow in my field and 
              i am doing react web development there.
            </p>
          </li>          
        </ol>
      </section>

      <section>
        <div className='flex items-center gap-4 mb-6'>
          <div className=''><FontAwesomeIcon icon={faWandMagicSparkles} className="mr-3 mb-4" /></div>
          <h3 className='text-yellow-300 text-2xl font-bold mb-5'>My Skills</h3>
        </div>
        <ul className='p-8 pt-7 relative bg-neutral-700 rounded-2xl cursor-pointer z-10'>
          <li className='mb-6'>
            <div className='flex items-center gap-1 mb-2' >
              <h5 className='text-base font-semibold'>Web Design</h5>
              <data className='text-base font-light text-zinc-300' value={80}>80%</data>
            </div>
            <div className='w-full h-2 bg-white rounded-lg' >
              <div className='bg-yellow-400 w-4/5 h-full rounded' >
              </div>
            </div>
          </li>
          <li className='mb-6'>
            <div className='flex items-center gap-1 mb-2' >
              <h5 className='text-base font-semibold'>Graphic Design</h5>
              <data className='text-base font-light text-zinc-300' value={70}>70%</data>
            </div>
            <div className='w-full h-2 bg-white rounded-lg' >
              <div className='bg-yellow-400 w-3/4 h-full rounded' >
              </div>
            </div>
          </li>
          <li className='mb-6'>
            <div className='flex items-center gap-1 mb-2' >
              <h5 className='text-base font-semibold'>Branding</h5>
              <data className='text-base font-light text-zinc-300' value={90}>90%</data>
            </div>
            <div className='w-full h-2 bg-white rounded-lg' >
              <div className='bg-yellow-400 w-11/12 h-full rounded' >
              </div>
            </div>
          </li>
          <li className='mb-6'>
            <div className='flex items-center gap-1 mb-2' >
              <h5 className='text-base font-semibold'>WordPress</h5>
              <data className='text-base font-light text-zinc-300' value={50}>50%</data>
            </div>
            <div className='w-full h-2 bg-white rounded-lg' >
              <div className='bg-yellow-400 w-2/4 h-full rounded' >
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Resume