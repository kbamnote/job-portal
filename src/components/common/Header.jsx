// src/components/Header.js
import React from 'react';
import { BriefcaseBusiness } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 flex justify-between items-center">
       
       <div className='flex space-x-2 items-center'>
       <BriefcaseBusiness />
      <h1 className="text-2xl">Job Quick</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <Link to="/"><li>Home</li></Link>
          <Link to="/jobs"><li>Jobs</li></Link>
         <li>About Us</li> 
          <Link to="/contact"><li>Contact Us</li></Link>
        </ul>
      </nav>
      <div>
        <button className=" px-4 py-2 rounded">Login</button>
        <button className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded ml-2">Register</button>
      </div>
    </header>
  );
};

export default Header;
