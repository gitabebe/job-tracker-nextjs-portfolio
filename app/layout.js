// app/layout.js (Update this file)
import './globals.css'; // Make sure this is imported first!
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Job Tracker | Professional Dashboard',
  description: 'Track your job applications easily with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header /> 
        <main className="flex-grow">
          {children} {/* This renders the content of the current page */}
        </main>
        <Footer /> {/* Footer placed outside the main content area */}
      </body>
    </html>
  );
}