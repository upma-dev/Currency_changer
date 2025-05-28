import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function Rates() {
    const [rates, setRates] = useState({});
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [historicalData, setHistoricalData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch current exchange rates
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

    // Fetch historical data for the selected currency
    useEffect(() => {
        const fetchHistoricalData = async () => {
            try {
                // Note: This is a mock historical data. In a real app, you'd use a proper API
                const dates = Array.from({ length: 7 }, (_, i) => {
                    const date = new Date();
                    date.setDate(date.getDate() - i);
                    return date.toISOString().split('T')[0];
                }).reverse();

                const mockRates = dates.map(date => ({
                    date,
                    rate: (Math.random() * 0.5 + 0.5) * rates[selectedCurrency]
                }));

                setHistoricalData(mockRates);
            } catch (error) {
                console.error('Error fetching historical data:', error);
            }
        };

        if (rates[selectedCurrency]) {
            fetchHistoricalData();
        }
    }, [selectedCurrency, rates]);

    const chartData = {
        labels: historicalData.map(data => data.date),
        datasets: [
            {
                label: `${selectedCurrency} Exchange Rate`,
                data: historicalData.map(data => data.rate),
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                tension: 0.4,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Currency Exchange Rate History',
            },
        },
        scales: {
            y: {
                beginAtZero: false,
            },
        },
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                <div className="text-2xl font-semibold text-gray-700">Loading rates...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Currency Exchange Rates</h1>
                    <p className="text-xl text-gray-600">Track currency exchange rates over time</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="mb-6">
                        <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-2">
                            Select Currency
                        </label>
                        <select
                            id="currency"
                            value={selectedCurrency}
                            onChange={(e) => setSelectedCurrency(e.target.value)}
                            className="block w-full max-w-xs rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            {Object.keys(rates).map((currency) => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="h-[400px]">
                        <Line data={chartData} options={chartOptions} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(rates)
                        .filter(([currency]) => currency !== selectedCurrency)
                        .slice(0, 6)
                        .map(([currency, rate]) => (
                            <div
                                key={currency}
                                className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105"
                            >
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {currency}
                                </h3>
                                <p className="text-2xl font-bold text-blue-600">
                                    1 {selectedCurrency} = {rate.toFixed(4)} {currency}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
} 