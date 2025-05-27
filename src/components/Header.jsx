import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo and Title */}
                    <div className="flex items-center space-x-3">
                        <div className="text-white text-3xl font-bold tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                                Currency Converter
                            </span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex items-center space-x-6">
                        <Link 
                            to="/" 
                            className="text-white hover:text-blue-100 transition-colors duration-200 font-medium"
                        >
                            Home
                        </Link>
                        <Link 
                            to="/converter" 
                            className="text-white hover:text-blue-100 transition-colors duration-200 font-medium"
                        >
                            Convert
                        </Link>
                        <Link 
                            to="/rates" 
                            className="text-white hover:text-blue-100 transition-colors duration-200 font-medium"
                        >
                            Rates
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header; 