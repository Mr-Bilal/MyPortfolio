import React, { useState } from 'react';
import Modal from 'react-modal';
import webdesign from '../Assets/icon-design.svg';
import webdevelopment from '../Assets/icon-dev.svg';
import avatar from '../Assets/avatar-1.png';
import avatar2 from '../Assets/avatar-2.png';
import avatar3 from '../Assets/avatar-3.png';
import avatar4 from '../Assets/avatar-4.png';
import logo1 from "../Assets/logo-1-color.png";
import logo2 from "../Assets/logo-2-color.png";
import logo3 from "../Assets/logo-3-color.png";
import logo4 from "../Assets/logo-4-color.png";
import logo5 from "../Assets/logo-5-color.png";
import logo6 from "../Assets/logo-6-color.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Pagination } from 'swiper/modules';

Modal.setAppElement('#root');

const About = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(null);

  const openModal = (testimonial) => {
    setCurrentTestimonial(testimonial);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentTestimonial(null);
  };

  return (
    <div className='bg-customDarkGray border w-screen border-zinc-800 rounded-b-3xl sm:max-2xl:ml-10 min-h-screen p-8 max-w-4xl relative z-0'>
      <h1 className='text-yellow-400 text-3xl font-bold'>About Me</h1>
      <hr className='mt-2 mb-4' />

      <section className='text-zinc-300 text-base font-light leading-relaxed'>
        <p className='mb-4'>
          I'm React web developer at beginner level.
          I enjoy turning complex problems into simple, beautiful and intuitive designs.
        </p>
        <p className='mb-4'>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
          Moreover, I add personal touch to your product and make sure that it is eye-catching and easy to use. My aim is to bring
          across your message and identity in the most creative way.
        </p>
      </section>

      <section className='mb-9 lg:hidden'>
        <h3 className='text-yellow-300 text-2xl font-bold mb-5'>
          What I'm Doing
        </h3>
        <ul className='grid-cols-2 bg-customDarkGray'>
          <li className='border p-3 rounded-2xl flex mb-4'>
            <div className='flex'>
              <img src={webdesign} alt='Design' height={60} width={60} />
            </div>
            <div className='text-left p-2'>
              <h4 className="text-white text-xl font-bold mb-2">Web Design</h4>
              <p className="text-base text-zinc-300 leading-relaxed">
                The most modern and high-quality design made at a professional level.
              </p>
            </div>
          </li>
          <li className='border p-3 rounded-2xl flex'>
            <div className='flex'>
              <img src={webdevelopment} alt='Design' height={60} width={60} />
            </div>
            <div className='text-left p-2'>
              <h4 className="text-white text-xl font-bold mb-2">Web Development</h4>
              <p className="text-base text-zinc-300 leading-relaxed">
                The most modern and high-quality site made at a professional level.
              </p>
            </div>
          </li>
          
        </ul>
      </section>

      <section className='mb-9 hidden lg:block'>
        <h3 className='text-yellow-300 text-2xl font-bold mb-5'>
          What I'm Doing
        </h3>
        <ul className='grid gap-5 grid-cols-2 bg-customDarkGray'>
          <li className='border p-5 rounded-2xl flex'>
            <div className='flex'>
              <img src={webdesign} alt='Design' height={60} width={60} />
            </div>
            <div className='text-left p-2'>
              <h4 className="text-white text-xl font-bold mb-2">Web Design</h4>
              <p className="text-base text-zinc-300 leading-relaxed">
                The most modern and high-quality design made at a professional level.
              </p>
            </div>
          </li>
          <li className='border p-5 rounded-2xl flex'>
            <div className='flex'>
              <img src={webdevelopment} alt='Design' height={60} width={60} />
            </div>
            <div className='text-left p-2'>
              <h4 className="text-white text-xl font-bold mb-2">Web Development</h4>
              <p className="text-base text-zinc-300 leading-relaxed">
                The most modern and high-quality site made at a professional level.
              </p>
            </div>
          </li>
          
        </ul>
      </section>

      <section className='mb-7 relative z-10'>
        <h3 className='text-yellow-300 text-2xl font-bold mb-5'>Testimonials</h3>
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <li className='min-w-96 cursor-pointer' onClick={() => openModal({
              avatar: avatar,
              name: "Muhammad Saif",
              text: "I've had the pleasure of working with Muhammad Bilal on developing a website for Esforge using React technology. His expertise and dedication have been instrumental in bringing the project to life. Muhammad's attention to detail and ability to solve complex problems with innovative solutions have made a significant impact on the project's success. His professional approach and commitment to excellence ensure that the final product not only meets but exceeds expectations. I highly recommend Muhammad Bilal for any web development needs."
            })}>
              <div className='bg-customDarkGray relative cursor-pointer mt-6 z-10 rounded-2xl p-8 pt-6'>
                <fig className='absolute top-0 left-0 translate-x-5 -translate-y-6 rounded-2xl bg-neutral-700'>
                  <img src={avatar} alt='' width='70' className='block' />
                </fig>
                <h4 className='text-white text-xl font-bold mb-2 ml-20'>Muhammad Saif</h4>
                <div className='text-base font-light leading-relaxed text-zinc-300 overflow-hidden flex flex-col line-clamp-2'>
                  <p>
                    I've had the pleasure of working with Muhammad Bilal on developing a website for Esforge using React technology. His expertise and dedication have been instrumental in bringing the project to life. Muhammad's attention to detail and ability to solve complex problems with innovative solutions have made a significant impact on the project's success. His professional approach and commitment to excellence ensure that the final product not only meets but exceeds expectations. I highly recommend Muhammad Bilal for any web development needs.
                  </p>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className='min-w-96 cursor-pointer' onClick={() => openModal({
              avatar: avatar2,
              name: "Ayesha Khan",
              text: "I had the opportunity to work with Muhammad Bilal on a React-based web development project, and I am thoroughly impressed with his skills and professionalism. Muhammad’s deep understanding of React, combined with his ability to translate complex requirements into clean, efficient code, made a significant difference in the project's success. His dedication to best practices and his proactive approach to problem-solving ensured a smooth development process and an outstanding end product. I highly recommend Muhammad Bilal for any React development needs—his expertise and commitment are truly exceptional."
            })}>
              <div className='bg-customDarkGray relative cursor-pointer mt-6 z-10 rounded-2xl p-8 pt-6'>
                <fig className='absolute top-0 left-0 translate-x-5 -translate-y-6 rounded-2xl bg-neutral-700'>
                  <img src={avatar2} alt='' width='70' className='block' />
                </fig>
                <h4 className='text-white text-xl font-bold mb-2 ml-20'>Ayesha Khan</h4>
                <div className='text-base font-light leading-relaxed text-zinc-300 overflow-hidden flex flex-col line-clamp-2'>
                  <p>
                    I had the opportunity to work with Muhammad Bilal on a React-based web development project, and I am thoroughly impressed with his skills and professionalism. Muhammad’s deep understanding of React, combined with his ability to translate complex requirements into clean, efficient code, made a significant difference in the project's success. His dedication to best practices and his proactive approach to problem-solving ensured a smooth development process and an outstanding end product. I highly recommend Muhammad Bilal for any React development needs—his expertise and commitment are truly exceptional.
                  </p>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className='min-w-96 cursor-pointer' onClick={() => openModal({
              avatar: avatar3,
              name: "Saima",
              text: "Bilal was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client."
            })}>
              <div className='bg-customDarkGray relative mt-6 cursor-pointer z-10 rounded-2xl p-8 pt-6'>
                <fig className='absolute top-0 left-0 translate-x-5 -translate-y-6 rounded-2xl bg-neutral-700'>
                  <img src={avatar3} alt='' width='70' className='block' />
                </fig>
                <h4 className='text-white text-xl font-bold mb-2 ml-20'>Saima</h4>
                <div className='text-base font-light leading-relaxed text-zinc-300 overflow-hidden flex flex-col line-clamp-2'>
                  <p>
                    Bilal was hired to create a corporate identity. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client.
                  </p>
                </div>
              </div>
            </li>
          </SwiperSlide>
          <SwiperSlide>
            <li className='min-w-96 cursor-pointer' onClick={() => openModal({
              avatar: avatar4,
              name: "Bazil Ali",
              text: "Muhammad Bilal is an exceptional React web developer who has consistently delivered outstanding results. His expertise in React and related technologies is evident in the high-quality, responsive, and user-friendly web solutions he creates. Muhammad’s ability to tackle complex challenges with innovative solutions and his commitment to coding best practices make him a standout professional in his field. Working with Muhammad was a great experience—his technical skills, combined with his collaborative and proactive approach, significantly contributed to the success of our project. I highly recommend him for any React development tasks."
            })}>
              <div className='bg-customDarkGray relative mt-6 cursor-pointer z-10 rounded-2xl p-8 pt-6'>
                <fig className='absolute top-0 left-0 translate-x-5 -translate-y-6 rounded-2xl bg-neutral-700'>
                  <img src={avatar4} alt='' width='70' className='block' />
                </fig>
                <h4 className='text-white text-xl font-bold mb-2 ml-20'>Bazil Ali</h4>
                <div className='text-base font-light leading-relaxed text-zinc-300 overflow-hidden flex flex-col line-clamp-2'>
                  <p>
                    Muhammad Bilal is an exceptional React web developer who has consistently delivered outstanding results. His expertise in React and related technologies is evident in the high-quality, responsive, and user-friendly web solutions he creates. Muhammad’s ability to tackle complex challenges with innovative solutions and his commitment to coding best practices make him a standout professional in his field. Working with Muhammad was a great experience—his technical skills, combined with his collaborative and proactive approach, significantly contributed to the success of our project. I highly recommend him for any React development tasks.
                  </p>
                </div>
              </div>
            </li>
          </SwiperSlide>
        </Swiper>
      </section>

      <section>
        <h3 className='text-yellow-300 text-2xl font-bold'>Clients</h3>
        <ul className='flex justify-start items-start gap-5 py-6 overflow-auto scroll-smooth overscroll-contain snap-mandatory'>
          <li>
            <img src={logo1} alt='' className='' />
          </li>
          <li>
            <img src={logo2} alt='' className='' />
          </li>
          <li>
            <img src={logo3} alt='' className='' />
          </li>
          <li>
            <img src={logo4} alt='' className='' />
          </li>
          <li>
            <img src={logo5} alt='' className='' />
          </li>
          <li>
            <img src={logo6} alt='' className='' />
          </li>
        </ul>
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="max-w-max mt-44 border-none inset-0 ml-96 items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
        contentLabel="Testimonial Modal"
      >
        {currentTestimonial && (
          <div className='bg-customDarkGray p-8 rounded-2xl text-white max-w-2xl w-full relative'>
            <button onClick={closeModal} className="absolute top-2 right-2 text-white">
              &times;
            </button>
            <figure className='flex items-center space-x-4 mb-4'>
              <img src={currentTestimonial.avatar} alt={currentTestimonial.name} className='w-16 h-16 rounded-full' />
              <figcaption className='text-xl font-bold'>{currentTestimonial.name}</figcaption>
            </figure>
            <p className='text-base font-light leading-relaxed text-zinc-300'>{currentTestimonial.text}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default About;
