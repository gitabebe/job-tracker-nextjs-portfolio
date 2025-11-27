// app/dashboard/page.js

"use client"; // <-- ESSENTIAL CLIENT DIRECTIVE for using React Hooks

import React, { useState, useEffect } from 'react';
// Corrected import path for Next.js folder structure:
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from '../../lib/firebase'; // <--- CORRECTED PATH: MOVES UP TWO LEVELS
import JobForm from '../../components/JobForm';
import JobTable from '../../components/JobTable';
import AuthComponent from '../../components/AuthComponent'; 

export default function Dashboard() {
    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState('All');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // --- 1. AUTHENTICATION & INITIAL DATA FETCH ---
    useEffect(() => {
        // Sets up the listener for user authentication status changes
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                fetchJobs(currentUser.uid);
            } else {
                setJobs([]); // Clear jobs if user logs out
            }
        });
        return () => unsubscribe();
    }, []);

    // --- 2. READ (Fetch Jobs from Firestore) ---
    const fetchJobs = async (userId) => {
        try {
            // Query jobs where the userId field matches the current user's ID
            const q = query(collection(db, 'jobs'), where('userId', '==', userId));
            const querySnapshot = await getDocs(q);
            const jobsList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            // Sort by date applied (newest first)
            setJobs(jobsList.sort((a, b) => new Date(b.date) - new Date(a.date)));
        } catch (error) {
            console.error("Error fetching documents: ", error);
        }
    };

    // --- 3. CREATE (Add Job to Firestore) ---
    const handleAddJob = async (newJob) => {
        if (!user) return; 
        try {
            const docRef = await addDoc(collection(db, 'jobs'), {
                ...newJob,
                userId: user.uid, 
                createdAt: new Date(),
            });
            // Update local state to reflect the new job with its Firestore ID
            setJobs([{ ...newJob, id: docRef.id, userId: user.uid }, ...jobs]);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    // --- 4. UPDATE (Status) ---
    const handleUpdateStatus = async (jobId, newStatus) => {
        try {
            const jobRef = doc(db, 'jobs', jobId);
            await updateDoc(jobRef, { status: newStatus });
            // Update local state
            setJobs(jobs.map(job => 
                job.id === jobId ? { ...job, status: newStatus } : job
            ));
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    };

    // --- 5. DELETE (Job) ---
    const handleDeleteJob = async (jobId) => {
        try {
            await deleteDoc(doc(db, 'jobs', jobId));
            // Update local state
            setJobs(jobs.filter(job => job.id !== jobId));
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    };

    // --- 6. FILTER (State Change) ---
    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    // Filter jobs for the table view
    const filteredJobs = jobs
        .filter(job => filter === 'All' || job.status === filter);

    // --- CONDITIONAL RENDERING ---

    if (loading) return <div className="text-center py-20 text-xl">Loading Dashboard...</div>;

    if (!user) {
        // If the user lands here while logged out, show the login screen
        return <AuthComponent />;
    }

    // --- MAIN DASHBOARD UI (If Authenticated) ---
    return (
        <div className="py-10">
            {/* Note: The Header is NOT included here, as it lives in app/layout.js */}
            
            <header className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-indigo-700">Application Dashboard</h1>
                <p className="text-gray-500 mt-2">Built with Next.js and Tailwind CSS</p>
            </header>
            
            {/* Responsive Layout Grid */}
            <section className="container mx-auto px-4 md:grid md:grid-cols-4 gap-8">
                
                {/* Sidebar (Job Form) */}
                <div className="md:col-span-1 mb-8 md:mb-0">
                    <JobForm onAddJob={handleAddJob} />
                </div>

                {/* Main Content (Job Table) */}
                <div className="md:col-span-3">
                    <JobTable 
                        jobs={filteredJobs} 
                        currentFilter={filter}
                        onFilterChange={handleFilterChange}
                        onDeleteJob={handleDeleteJob}
                        onUpdateStatus={handleUpdateStatus}
                    />
                </div>

            </section>
        </div>
    );
}