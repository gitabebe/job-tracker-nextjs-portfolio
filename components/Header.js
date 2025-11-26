// components/Header.js

"use client"; // <-- ADD THIS LINE FIRST
// components/Header.js (Update the navigation links)
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';

const Header = () => {
    const [user, setUser] = useState(null);

    // Track user state globally for conditional navigation
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleSignOut = async () => {
        await signOut(auth);
    };

    return (
        <header className="flex justify-between items-center bg-white p-4 shadow-lg sticky top-0 z-10">
            <Link href="/" className="text-2xl font-extrabold text-indigo-700 hover:text-indigo-900 transition">
                Job Tracker
            </Link>
            
            <nav className="flex items-center space-x-4">
                <Link href="/marketing" className="text-gray-600 hover:text-indigo-600 transition hidden sm:inline">
                    About
                </Link>

                {user ? (
                    <>
                        <Link href="/dashboard" className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md transition duration-200">
                            Dashboard
                        </Link>
                        <button
                            onClick={handleSignOut}
                            className="text-sm text-red-500 hover:text-red-700 transition"
                        >
                            Sign Out
                        </button>
                    </>
                ) : (
                    <Link href="/auth" className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md transition duration-200">
                        Sign In / Up
                    </Link>
                )}
            </nav>
        </header>
    );
};

export default Header;