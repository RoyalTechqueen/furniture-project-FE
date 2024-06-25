import React from 'react';
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";


const Header: React.FC = () => {
     const [showMenu, setShowMenu] = useState(false);
     return (
       <header className="fixed top-0 left-0 bg-white shadow-md z-10 w-full">
         <div className=" mx-auto flex max-w-screen-2xl px-4 py-6 sm:px-6 justify-between items-center space-x-5">
           <div className="flex items-center">
             <img src="./img5.jpg" alt="logo" className="h-12 rounded-md" />
           </div>
           <nav className="hidden sm:flex space-x-8 items-center text-md ">
             <a href="#home">Home</a>
             <a href="#collections">Collections</a>
             <a href="#about">About Us</a>
             <a href="#testimonial">Testimonials</a>
             <a href="#contact">Contact</a>
             <button className="px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-500">
               <a
                 href="#"
                 className="inline-flex items-center justify-center  text-base font-medium text-center  hover:text-white "
               >
                 Shop Now
               </a>
             </button>
           </nav>
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
               href="#collections"
               className="text-lg font-medium"
               onClick={() => setShowMenu(false)}
             >
               Collections
             </a>
             <a
               href="#about"
               className="text-lg font-medium"
               onClick={() => setShowMenu(false)}
             >
               About Us
             </a>
             <a
               href="#testimonials"
               className="text-lg font-medium"
               onClick={() => setShowMenu(false)}
             >
               Testimonials
             </a>
             <a
               href="#contact"
               className="text-lg font-medium"
               onClick={() => setShowMenu(false)}
             >
               Contact
             </a>
             <button className="px-3 py-2 bg-gray-200 hover:bg-gray-500 rounded-md">
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