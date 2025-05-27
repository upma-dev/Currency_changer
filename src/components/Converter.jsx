import React, { useState, useEffect } from 'react';

const Converter = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [exchangeRate, setExchangeRate] = useState(null);
    const [currencies, setCurrencies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch available currencies
        fetch('https://api.exchangerate-api.com/v4/latest/USD')
            .then(response => response.json())
            .then(data => {
                setCurrencies(Object.keys(data.rates));
                setIsLoading(false);
            })
            .catch(err => {
                setError('Failed to fetch currencies');
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        // Fetch exchange rate
        if (fromCurrency && toCurrency) {
            setIsLoading(true);
            fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
                .then(response => response.json())
                .then(data => {
                    setExchangeRate(data.rates[toCurrency]);
                    setIsLoading(false);
                })
                .catch(err => {
                    setError('Failed to fetch exchange rate');
                    setIsLoading(false);
                });
        }
    }, [fromCurrency, toCurrency]);

    const handleSwap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 p-4">
                {error}
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Currency Converter</h2>
            
            <div className="space-y-6">
                {/* Amount Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Amount
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        min="0"
                        step="0.01"
                    />
                </div>

                {/* Currency Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            From
                        </label>
                        <select
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                            {currencies.map(currency => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Swap Button */}
                    <div className="flex items-end justify-center">
                        <button
                            onClick={handleSwap}
                            className="p-2 rounded-full bg-orange-100 hover:bg-orange-200 transition-colors duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                        </button>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            To
                        </label>
                        <select
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                            {currencies.map(currency => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Result */}
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                    <div className="text-sm text-gray-600">Converted Amount</div>
                    <div className="text-2xl font-bold text-gray-900">
                        {amount} {fromCurrency} = {(amount * exchangeRate).toFixed(2)} {toCurrency}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                        1 {fromCurrency} = {exchangeRate} {toCurrency}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Converter; 