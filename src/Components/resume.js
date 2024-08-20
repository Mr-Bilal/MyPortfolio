import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookOpen , faWandMagicSparkles} from '@fortawesome/free-solid-svg-icons';
import projecticon from '../Assets/projecticon.png';
import codeicon from '../Assets/codeicon.png';
import toolicon from '../Assets/toolicon.png';

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

      <section className='w-screen max-w-3xl my-0 mx-auto text-center flex flex-col justify-center pb-12'>
        <div className='flex items-center gap-4 mb-6'>
          <div className=''><FontAwesomeIcon icon={faWandMagicSparkles} className="mr-3 mb-4" /></div>
          <h3 className='text-yellow-300 text-2xl font-bold mb-5'>My Skills</h3>
        </div>
        <div className='w-full max-h-96 overflow-auto scrollbar-none'>
            <div className='flex justify-around flex-wrap w-full items-center'>
                <span className='text-center flex flex-col items-center cursor-pointer hover:bg-yellow-300 hover:text-black m-3 w-56 h-80 align-top bg-transparent border text-white pb-5 rounded-xl transition ease-in-out duration-300 shadow-md'>
                    <img src={projecticon} alt='icon' className='ex' /><br></br>
                    <h3 className='mb-2 text-lg font-semibold'>ACADEMIC PROJECTS</h3>
                    <ul>
                        <li>Inventory Management System (C++)</li>
                        <li>Gym Management System (C++)</li>
                        <li>Regex Solver (C++) </li>
                        <li>Library System (Java)</li>
                    </ul>
                </span>
                <span className='text-center flex flex-col items-center cursor-pointer hover:bg-yellow-300 hover:text-black m-3 w-56 h-80 align-top bg-transparent border text-white pb-5 rounded-xl transition ease-in-out duration-300 shadow-md'>
                    <img src={codeicon} alt='icon' className='explogo' /><br></br>
                    <h3 className='mb-2 text-lg font-semibold'>PROGRAMMING LANGUAGES</h3>
                    <ul>
                        <li>C++</li>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
                </span>
                <span className='text-center flex flex-col items-center cursor-pointer hover:bg-yellow-300 hover:text-black m-3 w-56 h-80 align-top bg-transparent border text-white pb-5 rounded-xl transition ease-in-out duration-300 shadow-md'>
                    <img src={toolicon} alt='icon' className='explogo' /><br></br>
                    <h3 className='mb-2 text-lg font-semibold'>TOOLS</h3>
                    <ul>
                        <li>VS CODE</li>
                        <li>GIT</li>
                        <li>Collab</li>
                        <li>Canva</li>
                    </ul>
                </span>
            </div>
            <div className='flex justify-around flex-wrap w-full items-center'>
                <span className='text-center flex flex-col items-center cursor-pointer hover:bg-yellow-300 hover:text-black m-3 w-56 h-80 align-top bg-transparent border text-white pb-5 rounded-xl transition ease-in-out duration-300 shadow-md'>
                    <img src={projecticon} alt='icon' className='explogo' /><br></br>
                    <h3 className='mb-2 text-lg font-semibold'>ACADEMIC PROJECTS</h3>
                    <ul>
                        <li>Inventory Management System (C++)</li>
                        <li>Gym Management System (C++)</li>
                        <li>Regex Solver (C++) </li>
                        <li>Library System (Java)</li>
                    </ul>
                </span>
                <span className='text-center flex flex-col items-center cursor-pointer hover:bg-yellow-300 hover:text-black m-3 w-56 h-80 align-top bg-transparent border text-white pb-5 rounded-xl transition ease-in-out duration-300 shadow-md'>
                    <img src={codeicon} alt='icon' className='explogo' /><br></br>
                    <h3 className='mb-2 text-lg font-semibold'>PROGRAMMING LANGUAGES</h3>
                    <ul>
                        <li>C++</li>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
                </span>
                <span className='text-center flex flex-col items-center cursor-pointer hover:bg-yellow-300 hover:text-black m-3 w-56 h-80 align-top bg-transparent border text-white pb-5 rounded-xl transition ease-in-out duration-300 shadow-md'>
                    <img src={toolicon} alt='icon' className='explogo' /><br></br>
                    <h3 className='mb-2 text-lg font-semibold'>TOOLS</h3>
                    <ul>
                        <li>VS CODE</li>
                        <li>GIT</li>
                        <li>Collab</li>
                        <li>Canva</li>
                    </ul>
                </span>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Resume