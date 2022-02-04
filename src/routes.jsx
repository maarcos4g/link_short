import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import LinkPage from './pages/Link';
import NotFound from './pages/NotFound';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/meus-links" element={<LinkPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}