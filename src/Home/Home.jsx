import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8 transform transition-all duration-500 hover:scale-105">
                            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                                Transform Your
                                <span className="block text-orange-600 mt-2">Digital Experience</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-lg">
                                Experience the next level of digital innovation with our cutting-edge solutions. 
                                Download now and discover a world of possibilities.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/"
                                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-orange-600 rounded-lg transform transition-all duration-300 hover:bg-orange-700 hover:scale-105 hover:shadow-lg"
                                >
                                    <svg
                                        className="w-6 h-6 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                                    </svg>
                                    Download Now
                                </Link>
                                <Link
                                    to="/features"
                                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-orange-600 border-2 border-orange-600 rounded-lg transform transition-all duration-300 hover:bg-orange-50 hover:scale-105"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        
                        {/* Right Content - Image */}
                        <div className="relative transform transition-all duration-500 hover:scale-105">
                            <div className="relative z-10">
                                <img 
                                    className="w-full h-auto rounded-lg shadow-2xl" 
                                    src="https://i.ibb.co/5BCcDYB/Remote2.png" 
                                    alt="Hero illustration" 
                                />
                            </div>
                            <div className="absolute -inset-4 bg-orange-100 rounded-lg -z-10 blur-xl opacity-50"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                    <p className="text-xl text-gray-600">Discover the features that make us stand out</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Lightning Fast",
                            description: "Experience blazing fast performance with our optimized platform",
                            icon: "⚡"
                        },
                        {
                            title: "Secure & Reliable",
                            description: "Your data is protected with enterprise-grade security",
                            icon: "🔒"
                        },
                        {
                            title: "24/7 Support",
                            description: "Our dedicated team is always here to help you",
                            icon: "💬"
                        }
                    ].map((feature, index) => (
                        <div 
                            key={index}
                            className="p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-orange-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                        <p className="text-xl mb-8">Join thousands of satisfied users today</p>
                        <Link
                            to="/download"
                            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-orange-600 bg-white rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            Download Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
