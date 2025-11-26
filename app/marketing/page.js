// app/marketing/page.js
import React from 'react';
import Link from 'next/link';
import { auth } from '@/lib/firebase'; // Assuming lib folder is at root
import { onAuthStateChanged } from 'firebase/auth';

const MarketingPage = () => {
  return (
    <div className="bg-gray-50">
        
        {/* HERO SECTION */}
        <section className="text-center py-20 px-4 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
            <h1 className="text-5xl font-extrabold mb-4">Stop Tracking Jobs in Spreadsheets.</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Organize your applications, track statuses, and increase your job-hunting success rate with our simple, modern dashboard.
            </p>
            <Link 
                href="/auth" 
                className="bg-white text-indigo-700 hover:bg-gray-200 font-bold py-3 px-8 rounded-full text-lg shadow-xl transition transform hover:scale-105"
            >
                Get Started—It's Free
            </Link>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 px-4 container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Designed by Developers, For Developers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                
                {/* Feature 1 */}
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                    <div className="text-4xl text-indigo-500 mb-4">⚙️</div>
                    <h3 className="text-xl font-semibold mb-2">Full CRUD Functionality</h3>
                    <p className="text-gray-600">Add, view, update, and delete job entries with a persistent database connection via Firebase Firestore.</p>
                </div>

                {/* Feature 2 */}
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                    <div className="text-4xl text-indigo-500 mb-4">📊</div>
                    <h3 className="text-xl font-semibold mb-2">Instant Status Filtering</h3>
                    <p className="text-gray-600">Filter your applications by 'Interviewing,' 'Offer,' or 'Rejected' instantly with real-time updates.</p>
                </div>

                {/* Feature 3 */}
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                    <div className="text-4xl text-indigo-500 mb-4">📱</div>
                    <h3 className="text-xl font-semibold mb-2">Mobile Responsive UI</h3>
                    <p className="text-gray-600">Tailwind CSS ensures the dashboard works flawlessly on desktop, tablet, and mobile screens.</p>
                </div>
            </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section className="bg-gray-800 text-white py-16 text-center">
             <h3 className="text-3xl font-bold mb-4">Ready to Land Your Dream Job?</h3>
             <Link 
                href="/auth" 
                className="bg-green-400 hover:bg-green-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition shadow-2xl"
            >
                Start Tracking Now
            </Link>
        </section>
    </div>
  );
};

export default MarketingPage;