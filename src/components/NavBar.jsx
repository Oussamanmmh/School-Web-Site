import React, { useState } from "react";
import logo from '../assets/logo.jpg';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    const scrollToAboutUs = () => {
        const aboutUsSection = document.getElementById('about-us');
        if (aboutUsSection) {
            aboutUsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToHome = () => {
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToLocation = () => {
        const locationSection = document.getElementById('location');
        if (locationSection) {
            locationSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="bg-white mt-3 shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 flex justify-between items-center py-3">
                <div className="flex flex-row">
                <img src={logo} alt="Smart Langue School" className="h-10" />
                <a className="text-md font-bold ml-10 mt-2" href="/">Smart Langue School</a>
                </div>
                <div className="md:hidden">
                    <button 
                        className="text-gray-800 focus:outline-none" 
                        onClick={toggleMenu}
                    >
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
                <div className={`md:flex flex-col md:flex-row md:items-center md:static absolute left-0 w-full md:w-auto md:space-x-6 space-y-3 md:space-y-0 bg-white md:bg-white  transition-all duration-100 ease-in-out ${isOpen ? 'top-20' : 'top-[-490px]'}`}>
                    <ul className="navbar-nav flex flex-col md:flex-row md:space-x-4">
                        <li className="nav-item">
                            <a className="nav-link py-2 px-4 block hover:bg-gray-100 rounded" onClick={scrollToHome}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-2 px-4 block hover:bg-gray-100 rounded"  onClick={scrollToAboutUs}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-2 px-4 block hover:bg-gray-100 rounded" onClick={scrollToLocation}>Location</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link py-2 px-4 block hover:bg-gray-100 rounded" href="/join">Join</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
