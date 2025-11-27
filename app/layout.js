// app/layout.js (The correct structure)
import './globals.css';
import Header from '../components/Header'; // <-- MUST BE PRESENT
import Footer from '../components/Footer'; // <-- MUST BE PRESENT

export const metadata = {
  title: 'Job Tracker | Professional Dashboard',
  description: 'Track your job applications easily with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header /> {/* This line now references the import */}
        <main className="flex-grow">
          {children} 
        </main>
        <Footer />
      </body>
    </html>
  );
}