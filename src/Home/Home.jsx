import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8 transform transition-all duration-500 hover:scale-105">
                            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                                Currency
                                <span className="block text-blue-600 mt-2">Converter Pro</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-lg">
                                Convert currencies in real-time with our powerful and easy-to-use currency converter. 
                                Get accurate exchange rates instantly.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/converter"
                                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg transform transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-lg"
                                >
                                    <svg
                                        className="w-6 h-6 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Convert Now
                                </Link>
                                <Link
                                    to="/rates"
                                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 border-2 border-blue-600 rounded-lg transform transition-all duration-300 hover:bg-blue-50 hover:scale-105"
                                >
                                    View Rates
                                </Link>
                            </div>
                        </div>
                        
                        {/* Right Content - Image */}
                        <div className="relative transform transition-all duration-500 hover:scale-105">
                            <div className="relative z-10 bg-white p-6 rounded-xl shadow-2xl">
                                <div className="aspect-w-16 aspect-h-9">
                                    <img 
                                        className="w-full h-auto rounded-lg" 
                                        src="https://img.freepik.com/free-vector/indian-rupee-currency-symbol-concept-illustration_114360-10179.jpg" 
                                        alt="Indian Currency and Coins Illustration" 
                                    />
                                </div>
                                {/* Decorative Money Elements */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 blur-xl"></div>
                                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-100 rounded-full opacity-50 blur-xl"></div>
                                {/* Floating Currency Icons */}
                                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-4xl">₹</div>
                                <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 text-4xl">🪙</div>
                                <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 text-4xl">💱</div>
                                <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 text-4xl">🪙</div>
                                <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 translate-y-1/2 text-4xl">₹</div>
                            </div>
                            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg -z-10 blur-xl opacity-50"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section with Money Icons */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Converter</h2>
                    <p className="text-xl text-gray-600">Experience the best currency conversion tool</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Real-Time Rates",
                            description: "Get the most up-to-date exchange rates from reliable sources",
                            icon: "₹",
                            bgColor: "from-blue-50 to-blue-100"
                        },
                        {
                            title: "Multiple Currencies",
                            description: "Convert between 170+ global currencies instantly",
                            icon: "🪙",
                            bgColor: "from-purple-50 to-purple-100"
                        },
                        {
                            title: "Easy to Use",
                            description: "Simple and intuitive interface for quick conversions",
                            icon: "💱",
                            bgColor: "from-indigo-50 to-indigo-100"
                        }
                    ].map((feature, index) => (
                        <div 
                            key={index}
                            className={`p-6 bg-gradient-to-br ${feature.bgColor} rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">Start Converting Now</h2>
                        <p className="text-xl mb-8">Join thousands of users who trust our currency converter</p>
                        <Link
                            to="/converter"
                            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-50"
                        >
                            Convert Currency
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
