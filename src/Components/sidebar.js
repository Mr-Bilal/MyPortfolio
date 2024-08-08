import React from 'react';
import '../../src/index.css'
import avatar from "../Assets/my-avatar.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faDownload, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF , faInstagram } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className="border-zinc-800 w-72 bg-customDarkGray p-12 pb-4 h-full max-h-max sticky top-16 mb-0 z-1 justify-center ml-16 mt-16 border rounded-3xl text-white ">
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
        <p className="flex items-center"><FontAwesomeIcon icon={faDownload} className="mr-3" /> December 13, 2002</p>
        <p className="flex items-center"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3" /> Islamabad, Pakistan</p>
      </div>
      <div className="flex justify-center mt-9 space-x-4">
        <a href="twitter" className="text-white hover:text-yellow-400"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
        <a href="facebook" className="text-white hover:text-yellow-400"><FontAwesomeIcon icon={faFacebookF} size="lg" /></a>
        <a href="instagram" className="text-white hover:text-yellow-400"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
      </div>
    </div>
  );
};

export default Sidebar;
