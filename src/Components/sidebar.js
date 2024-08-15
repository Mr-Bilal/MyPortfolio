import React, { useState } from 'react';
import '../../src/index.css';
import avatar from "../Assets/my-avatar.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faBirthdayCake, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Mobile View */}
      <div className="lg:hidden w-full bg-customDarkGray p-4 lg:p-6 border-b border-zinc-800 rounded-b-3xl text-white flex flex-col  top-0 z-10">
        <div className="text-center flex flex-col items-center">
          <figure className='bg-neutral-700 rounded-full w-24'>
            <img src={avatar} alt="Profile" className="w-32 lg:w-32" />
          </figure>
          <h2 className="text-2xl font-semibold my-2">Muhammad Bilal</h2>
          <h3 className="bg-neutral-700 text-base my-1 px-2 py-1 rounded-xl">Web Developer</h3>
        </div>

        <button
          onClick={toggleExpand}
          className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded-full hover:bg-yellow-500 focus:outline-none"
        >
          {isExpanded ? 'Hide Details' : 'Show Details'}
        </button>

        {isExpanded && (
          <div className="mt-4 space-y-3 w-full text-center">
            <p className="flex items-center justify-center"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> bilal.mani6011@gmail.com</p>
            <p className="flex items-center justify-center"><FontAwesomeIcon icon={faPhone} className="mr-2" /> +92 3019806159</p>
            <p className="flex items-center justify-center"><FontAwesomeIcon icon={faBirthdayCake} className="mr-2" /> December 13, 2002</p>
            <p className="flex items-center justify-center"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Islamabad, Pakistan</p>
          </div>
        )}

        <div className={`flex justify-center mt-4 lg:mt-6 space-x-4 ${isExpanded ? 'mt-4' : 'mt-6'}`}>
          <a href="https://www.linkedin.com/in/muhammad-bilal-39912524a/" className="text-white hover:text-yellow-400"><FontAwesomeIcon icon={faLinkedin} size="xl" /></a>
          <a href="https://github.com/Mr-Bilal" className="text-white hover:text-yellow-400"><FontAwesomeIcon icon={faGithub} size="xl" /></a>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block border-zinc-800 w-72 bg-customDarkGray p-12 pb-4 h-full max-h-max sticky top-16 mb-0 z-1 justify-center ml-16 mt-16 border rounded-3xl text-white">
        <div className="text-center mb-5">
          <figure className='bg-neutral-700 rounded-full'>
            <img src={avatar} alt="Profile" className="" />
          </figure>
          <h2 className="text-2xl content-stretch font-sans font-semibold my-4">Muhammad Bilal</h2>
          <h3 className="bg-neutral-700 text-base my-1 rounded-xl">Web Developer</h3>
          <hr className='mt-7'></hr>
        </div>
        <div className="space-y-5">
          <p className="flex items-center"><FontAwesomeIcon icon={faEnvelope} className="mr-1" /> bilal.mani6011@gmail.com</p>
          <p className="flex items-center"><FontAwesomeIcon icon={faPhone} className="mr-3" /> +92 3019806159</p>
          <p className="flex items-center"><FontAwesomeIcon icon={faBirthdayCake} className="mr-3" /> December 13, 2002</p>
          <p className="flex items-center"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3" /> Islamabad, Pakistan</p>
        </div>
        <div className="flex justify-center mt-9 space-x-4">
          <a href="https://www.linkedin.com/in/muhammad-bilal-39912524a/" className="text-white hover:text-yellow-400"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
          <a href="https://github.com/Mr-Bilal" className="text-white hover:text-yellow-400"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
