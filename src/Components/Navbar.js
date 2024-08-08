import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <nav className='border right-0 w-max left-auto top-0 bottom-auto border-zinc-800 ml-10 mt-16 rounded-3xl text-white px-5 bg-customDarkGray rounded-t-3xl rounded-b-none'>
            <ul className='flex flex-wrap items-center justify-center px-3 gap-8'>
                <Link to='/'>
                <li className='list-none'>
                    <button className='py-4 px-2 font-semibold text-lg cursor-pointer hover:text-yellow-400'>About</button>
                </li>
                </Link>
                <Link to='/resume'>
                <li className='list-item'>
                    <button className='py-4 px-2 font-semibold text-lg cursor-pointer hover:text-yellow-400'>Resume</button>
                </li>
                </Link>
                <Link to='/portfolio'>
                <li className='list-item'>
                    <button className='py-4 px-2 font-semibold text-lg cursor-pointer hover:text-yellow-400'>Portfolio</button>
                </li>
                </Link>
                <Link to='/contact'>
                <li className='list-item'>
                    <button className='py-4 px-2 font-semibold text-lg cursor-pointer hover:text-yellow-400'>Contact</button>
                </li>
                </Link>
            </ul>
        </nav>
  )
}

export default Navbar