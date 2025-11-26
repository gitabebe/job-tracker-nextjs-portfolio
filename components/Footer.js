// components/Footer.js
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Job Tracker Dashboard. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <Link href="/marketing" className="hover:text-indigo-400 transition">About</Link>
          <a href="mailto:contact@example.com" className="hover:text-indigo-400 transition">Contact</a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-4">
        Built with Next.js, Tailwind CSS, and Firebase.
      </div>
    </footer>
  );
};

export default Footer;