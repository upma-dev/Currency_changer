import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Home/Home';
import Converter from './components/Converter';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Header />
                <main className="container mx-auto px-4 py-8">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/converter" element={<Converter />} />
                        <Route path="/rates" element={<Converter />} />
                    </Routes>
                </main>
                <footer className="bg-gray-800 text-white py-8 mt-12">
                    <div className="container mx-auto px-4 text-center">
                        <p className="text-gray-400">© 2024 Currency Converter. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
