import Link from 'next/link';
import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/" className="text-white font-bold text-lg">
                        Your Logo
                    </Link>
                </div>
                <div className="hidden md:block">
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="text-white hover:text-gray-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            {/*<Link href="/about" className="text-white hover:text-gray-300">
                                About
                            </Link>*/}
                        </li>
                        {/* Add more nav items as needed */}
                    </ul>
                </div>
                {/* Hamburger menu for mobile */}
                <div className="md:hidden">
                    <button className="text-white">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
