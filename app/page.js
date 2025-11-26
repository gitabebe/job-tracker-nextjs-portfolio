// app/page.js (The new root page)
import { redirect } from 'next/navigation';

// This is the file that loads first at the root URL (/)
export default function RootPage() {
    // We redirect the user to the main marketing page
    // The conditional logic (auth check) will happen inside the marketing page
    redirect('/marketing'); 
}