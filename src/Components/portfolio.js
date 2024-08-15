import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import project1 from '../Assets/project-1.jpg'
import project2 from '../Assets/project-2.png'
import project3 from '../Assets/project-3.jpg'
import project4 from '../Assets/project-4.png'
import project5 from '../Assets/project-5.png'
import project6 from '../Assets/project-6.png'
import project7 from '../Assets/project-7.png'
import project8 from '../Assets/project-8.jpg'
import project9 from '../Assets/project-9.png'

const categories = ['All', 'Web Design', 'Applications', 'Web Development'];
const projects = [
  { id: 1, title: 'Finance', category: 'Web Development', image: project1 },
  { id: 2, title: 'Orizon', category: 'Web Development', image: project2 },
  { id: 3, title: 'Fundo', category: 'Web Design', image: project3 },
  { id: 4, title: 'Brawlhalla', category: 'Applications', image: project4 },
  { id: 5, title: 'DSM.', category: 'Web Design', image: project5 },
  { id: 6, title: 'MetaSpark', category: 'Web Design', image: project6 },
  { id: 7, title: 'Summary', category: 'Web Development', image: project7 },
  { id: 8, title: 'Task Manager', category: 'Applications', image: project8 },
  { id: 9, title: 'Finance', category: 'Web Development', image: project9 },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false); // Close the dropdown after selecting a category
  };

  const filteredProjects =
    selectedCategory === 'All' ? projects : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className='bg-customDarkGray border rounded-b-3xl w-full border-zinc-800 sm:max-2xl:ml-10 min-h-screen p-8 max-w-4xl'>
      <h1 className='text-yellow-400 text-3xl font-bold'>Portfolio</h1>
      <hr className='mt-2 mb-4'></hr>

      <section>
        <ul className='flex justify-start items-center gap-7 pl-1 mb-8'>
          {categories.map((category, index) => (
            <li key={index}>
              <button
                onClick={() => handleCategorySelect(category)}
                className={`font-bold cursor-pointer text-left ${
                  selectedCategory === category ? 'text-yellow-400' : 'text-white'
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
        <div className='relative mb-6 hidden'>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className='flex justify-between items-center w-full px-4 py-3 border rounded-xl text-base font-light'
          >
            <div>{selectedCategory}</div>
            <div><FontAwesomeIcon icon={faChevronDown} /></div>
          </button>
          {dropdownOpen && (
            <ul className='absolute w-full mt-2 bg-gray-500 rounded-xl shadow-lg'>
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleCategorySelect(category)}
                    className='w-full px-4 py-2 text-left hover:bg-gray-200'
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <ul className='grid grid-cols-3 gap-8 mb-3'>
          {filteredProjects.map((project) => (
            <li key={project.id} className='block hover:text-yellow-400'>
              <button className='block w-full'>
                <figure className='relative w-full overflow-hidden mb-4 h-auto rounded-2xl'>
                  <img src={project.image} alt='' />
                </figure>
                <h3 className='text-base font-semibold ml-3 leading-5'>
                  {project.title}
                </h3>
                <p className='text-base font-light ml-3 text-zinc-300'>
                  {project.category}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Portfolio;
