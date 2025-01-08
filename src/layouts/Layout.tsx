import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { initializeNavigation } from '../utils/navigation';

export default function Layout() {
  const navigate = useNavigate();

  React.useEffect(() => {
    initializeNavigation(navigate);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">About Us</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="/about" className="text-base text-gray-600 hover:text-gray-900">Our Story</a>
                </li>
                <li>
                  <a href="/team" className="text-base text-gray-600 hover:text-gray-900">Team</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="/help" className="text-base text-gray-600 hover:text-gray-900">Help Center</a>
                </li>
                <li>
                  <a href="/contact" className="text-base text-gray-600 hover:text-gray-900">Contact Us</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="/privacy" className="text-base text-gray-600 hover:text-gray-900">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms" className="text-base text-gray-600 hover:text-gray-900">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Connect</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="https://linkedin.com/in/my-epilepsy-journey" className="text-base text-gray-600 hover:text-gray-900">LinkedIn</a>
                </li>
                <li>
                  <a href="https://twitter.com/EpilepsyMy" className="text-base text-gray-600 hover:text-gray-900">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <p className="text-base text-gray-500">
                &copy; {new Date().getFullYear()} ME MYSELF & Us™. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}