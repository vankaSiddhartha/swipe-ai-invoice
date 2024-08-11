"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleStartTrial = () => {
    router.push('/home');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <header className="w-full max-w-6xl flex justify-between items-center mb-8 sm:mb-16">
        <div className="text-xl sm:text-2xl font-bold">ChatInvoice</div>
        <nav className="hidden sm:flex space-x-6">
          <a href="#features" className="hover:text-indigo-200 transition-colors">Features</a>
          <a href="#achievements" className="hover:text-indigo-200 transition-colors">Achievements</a>
          <a href="#contact" className="hover:text-indigo-200 transition-colors">Contact</a>
        </nav>
        <button onClick={toggleMenu} className="sm:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </header>

      {isMenuOpen && (
        <nav className="sm:hidden w-full text-center mb-8">
          <a href="#features" className="block py-2 hover:text-indigo-200 transition-colors">Features</a>
          <a href="#achievements" className="block py-2 hover:text-indigo-200 transition-colors">Achievements</a>
          <a href="#contact" className="block py-2 hover:text-indigo-200 transition-colors">Contact</a>
        </nav>
      )}

      <div className="text-center mb-16 sm:mb-24 max-w-3xl px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">Hello Vamsi! Welcome to ChatInvoice</h1>
        <p className="text-lg sm:text-xl mb-6 sm:mb-10 text-indigo-100">Revolutionize Your Invoice Management with Chat and Swipe</p>
        <button 
          onClick={handleStartTrial}
          className="bg-white text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-indigo-100 transition-colors shadow-lg"
        >
          Start Your Free Trial
        </button>
      </div>

      <div id="achievements" className="w-full max-w-6xl mb-16 sm:mb-24 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Developer Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">College Network</h3>
            <p className="mb-3 sm:mb-4 text-indigo-100">Successfully launched on Google Play Store</p>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-indigo-100">
              <li>Reddit-style mobile app for college students</li>
              <li>Available on Play Store</li>
              <li>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.santhi.collegenetwork" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                  Download College Network
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">IntrvuAI.in.net</h3>
            <p className="mb-3 sm:mb-4 text-indigo-100">Successful web application launch</p>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-indigo-100">
              <li>Featured on Product Hunt</li>
              <li>#11 Product of the Day</li>
              <li>150+ upvotes on Product Hunt</li>
              <li>Gained over 150 active users rapidly</li>
              <li>
                <a 
                  href="https://intrvuai.in.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                  Visit IntrvuAI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="contact" className="w-full max-w-6xl mb-16 sm:mb-24 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">Contact</h2>
        <div className="bg-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-lg text-center">
          <p className="text-lg sm:text-xl mb-3 sm:mb-4">Siddhartha Vanka</p>
          <p className="text-indigo-100">Android Development Master | Full Stack Developer</p>
          <p className="mt-4">
            <a href="https://www.linkedin.com/in/vanka-siddhartha-35b767229/" className="underline hover:text-white mr-2">
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      <footer className="w-full text-center pb-6 sm:pb-8 text-indigo-200">
        <p>&copy; 2024 ChatInvoice. All rights reserved.</p>
      </footer>
    </main>
  );
}