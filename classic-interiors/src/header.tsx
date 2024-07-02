import React from 'react';
import { useState, useEffect} from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaSearch } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
     const [showMenu, setShowMenu] = useState(false);
     useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 30) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  

     return (
       <header className={`fixed w-full z-10 transition-colors duration-300 ${isScrolled ? 'bg-customGold' : 'bg-transparent'}`}>
         <div className=" mx-auto flex max-w-screen-2xl px-4 py-6 sm:px-6 justify-between items-center space-x-5">
           <div className="flex items-center">
             <img src="./img5.jpg" alt="logo" className="h-12 rounded-md" />
           </div>
           <nav className="hidden sm:flex space-x-8 items-center text-xl">
             <a href="#home">Home</a>
             <a href="#catalogue">Catalogue</a>
             <a href="#blog">Blog Post</a>
             <a href="#contact">Contact</a>
             </nav>
             <div className=' flex items-center space-x-5'>
            <form className="max-w-md mx-auto">   
          <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center p-5 pointer-events-none">
           <FaSearch className='w-4 h-4' />
        </div>
        <input type="search" id="default-search" className="block w-full px-12 py-4 text-sm text-black border border-gray-300 rounded-3xl  bg-gray-50 focus:outline-none " placeholder="Search Products" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-green-600 hover:bg-green-800  focus:outline-none  font-medium rounded-xl text-sm px-4 py-2 ">Search</button>
    </div>
    </form>
    <button className=" hidden sm:flex px-3 py-2 bg-green-600 hover:bg-green-800 rounded-md">
               <a
                 href="#"
                 className=" inline-flex items-center justify-center  text-base font-medium text-center  hover:text-white "
               >
                 Shop Now
               </a>
             </button> 
           </div>
           
           <button
             className="block sm:hidden ml-4"
             aria-label="Toggle Menu"
             onClick={() => setShowMenu(!showMenu)}
           >
             {showMenu ? (
               <IoMdClose className="text-2xl" />
             ) : (
               <RxHamburgerMenu className="text-2xl" />
             )}
           </button>
         </div>
         <div
           className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transform ${
             showMenu ? "translate-x-0" : "-translate-x-full"
           } transition-transform duration-300 ease-in-out sm:hidden`}
         >
           <div className="flex justify-end p-4">
             <button
               className="text-2xl"
               aria-label="Close Menu"
               onClick={() => setShowMenu(false)}
             >
               <IoMdClose />
             </button>
           </div>
           <nav className="flex flex-col items-center space-y-6 p-6">
             <a
               href="#home"
               className="text-lg font-medium"
               onClick={() => setShowMenu(false)}
             >
               Home
             </a>
             <a
               href="#catalogue"
               className="text-lg font-medium"
               onClick={() => setShowMenu(false)}
             >
               Catalogue
             </a>
             <a
               href="#blog"
               className="text-lg font-medium"
               onClick={() => setShowMenu(false)}
             >
               Blog Post
             </a>
             <a
               href="#contact"
               className="text-lg font-medium"
               onClick={() => setShowMenu(false)}
             >
               Contact
             </a>
             <button className="px-3 py-2 bg-green-600 hover:bg-green-800 rounded-md">
               <a
                 href="#"
                 className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black rounded-lg hover:text-white"
                 onClick={() => setShowMenu(false)}
               >
                 Shop Now
               </a>
             </button>
           </nav>
         </div>
       </header>
     );
};
export default Header;