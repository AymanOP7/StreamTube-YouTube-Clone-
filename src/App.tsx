/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar } from './components/Layout';
import { Home } from './pages/Home';
import { Watch } from './pages/Watch';
import { Profile } from './pages/Profile';
import { SearchPage } from './pages/SearchPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100">

        <Navbar />
        <div className="flex pt-14">
          <Sidebar />
          <main className="flex-1 lg:ml-64 transition-all duration-300">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watch/:id" element={<Watch />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/channel/:id" element={<Profile />} />
              <Route path="/shorts" element={<div className="p-8 text-center text-xl font-bold">Shorts Feed (Coming Soon)</div>} />
              <Route path="/subscriptions" element={<div className="p-8 text-center text-xl font-bold">Your Subscriptions</div>} />
              <Route path="/trending" element={<div className="p-8 text-center text-xl font-bold">Trending Content</div>} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="*" element={<div className="p-8 text-center text-xl font-bold">404 - Page Not Found</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

