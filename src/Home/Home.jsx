import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
    const [rates, setRates] = useState({});
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [loading, setLoading] = useState(true);

    const popularCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'INR', 'SGD'];

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
                setRates(response.data.rates);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching rates:', error);
                setLoading(false);
            }
        };
        fetchRates();
    }, []);

    useEffect(() => {
        if (rates[toCurrency]) {
            const result = amount * rates[toCurrency];
            setConvertedAmount(result.toFixed(4));
        }
    }, [amount, fromCurrency, toCurrency, rates]);

    const handleSwapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
            {/* Main Converter Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Currency Conversion and Latest Exchange Rates
                    </h1>
                    <p className="text-xl text-gray-600">
                        Real-time exchange rates for 170+ world currencies
                    </p>
                </div>

                {/* Converter Card */}
                <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* From Currency */}
                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700">From</label>
                            <div className="flex gap-4">
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                                <select
                                    value={fromCurrency}
                                    onChange={(e) => setFromCurrency(e.target.value)}
                                    className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                >
                                    {Object.keys(rates).map((currency) => (
                                        <option key={currency} value={currency}>
                                            {currency}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Swap Button */}
                        <div className="flex items-center justify-center">
                            <button
                                onClick={handleSwapCurrencies}
                                className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                            >
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                            </button>
                        </div>

                        {/* To Currency */}
                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700">To</label>
                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    value={convertedAmount}
                                    readOnly
                                    className="flex-1 rounded-lg border-gray-300 bg-gray-50 shadow-sm"
                                />
                                <select
                                    value={toCurrency}
                                    onChange={(e) => setToCurrency(e.target.value)}
                                    className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                >
                                    {Object.keys(rates).map((currency) => (
                                        <option key={currency} value={currency}>
                                            {currency}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Latest Rates Section */}
                <div className="bg-white rounded-xl shadow-xl p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Exchange Rates</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {popularCurrencies.map((currency) => (
                            <div key={currency} className="p-4 bg-gray-50 rounded-lg">
                                <div className="text-sm text-gray-500">{currency}</div>
                                <div className="text-lg font-semibold text-gray-900">
                                    {loading ? '...' : (1 / rates[currency]).toFixed(4)}
                                </div>
                                <div className="text-sm text-gray-500">USD/{currency}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Real-Time Rates",
                            description: "Get the most up-to-date exchange rates from reliable sources",
                            icon: "💱",
                            bgColor: "from-blue-50 to-blue-100"
                        },
                        {
                            title: "170+ Currencies",
                            description: "Convert between all major and minor world currencies",
                            icon: "🌍",
                            bgColor: "from-purple-50 to-purple-100"
                        },
                        {
                            title: "Free & Accurate",
                            description: "No hidden fees, just accurate currency conversion",
                            icon: "✨",
                            bgColor: "from-indigo-50 to-indigo-100"
                        }
                    ].map((feature, index) => (
                        <div 
                            key={index}
                            className={`p-6 bg-gradient-to-br ${feature.bgColor} rounded-xl shadow-lg`}
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
