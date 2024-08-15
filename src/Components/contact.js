import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_rwb2lw4', 'template_ltk84lu', form.current, {
            publicKey: 'imfUpu3xGkWtfPj_3',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
    };
  return (
    <div className='bg-customDarkGray border w-full rounded-b-3xl border-zinc-800 sm:max-2xl:ml-10 min-h-screen p-8 max-w-4xl'>
      <h1 className='text-3xl font-bold text-yellow-400'>Contact</h1>
      <hr className='mt-2 mb-4'></hr>

      <section>
        <div>
            <h3 className='text-2xl mt-5 sm:ml-80 font-semibold text-yellow-300'>Contact Form</h3>
            <form className='flex flex-col items-center' ref={form} onSubmit={sendEmail}>
                <input type='text' className='bg-neutral-700 placeholder-white text-white border rounded-xl mt-6 w-2/3 h-11 ' placeholder=' Your Name' name='from_name'/>
                <input type='email' className='bg-neutral-700 placeholder-white text-white mt-6 w-2/3 h-11 border rounded-xl' placeholder=' Your Email' name='from_email'/>
                <textarea className='bg-neutral-700 placeholder-white text-white mt-6 w-2/3 h-40 border rounded-xl' name='message' rows='5' placeholder=' Your Message'></textarea>
                <button type='submit' value='Send' className='mt-6 bg-white text-black py-3 px-14 m-1 rounded-xl hover:bg-yellow-300'>Submit</button>
            </form> 
        </div>
      </section>
    </div>
  )
}

export default Contact;