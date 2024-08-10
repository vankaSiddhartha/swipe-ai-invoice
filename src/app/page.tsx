"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleStartTrial = () => {
    router.push('/home');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <header className="w-full max-w-6xl flex justify-between items-center mb-16">
        <div className="text-2xl font-bold">ChatInvoice</div>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-indigo-200 transition-colors">Features</a>
          <a href="#achievements" className="hover:text-indigo-200 transition-colors">Achievements</a>
          <a href="#contact" className="hover:text-indigo-200 transition-colors">Contact</a>
        </nav>
      </header>

      <div className="text-center mb-24 max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">Hello Vamsi! Welcome to ChatInvoice</h1>
        <p className="text-xl mb-10 text-indigo-100">Revolutionize Your Invoice Management with Chat and Swipe</p>
        <button 
          onClick={handleStartTrial}
          className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-100 transition-colors shadow-lg"
        >
          Start Your Free Trial
        </button>
      </div>

      

      <div id="achievements" className="w-full max-w-6xl mb-24">
        <h2 className="text-4xl font-bold mb-8 text-center">Developer Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
            <h3 className="text-2xl font-bold mb-4">College Network</h3>
            <p className="mb-4 text-indigo-100">Successfully launched on Google Play Store</p>
            <ul className="list-disc list-inside space-y-2 text-indigo-100">
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
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
            <h3 className="text-2xl font-bold mb-4">IntrvuAI.in.net</h3>
            <p className="mb-4 text-indigo-100">Successful web application launch</p>
            <ul className="list-disc list-inside space-y-2 text-indigo-100">
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

      <div id="contact" className="w-full max-w-6xl mb-24">
  <h2 className="text-4xl font-bold mb-8 text-center">Contact</h2>
  <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg text-center">
    <p className="text-xl mb-4">Siddhartha Vanka</p>
    <p className="text-indigo-100">Android Development Master | Full Stack Developer</p>
    <p className="mt-4">
      <a href="https://www.linkedin.com/in/vanka-siddhartha-35b767229/" className="underline hover:text-white mr-2">
        LinkedIn
      </a>
   
    
    </p>
  </div>
</div>

      <footer className="w-full text-center pb-8 text-indigo-200">
        <p>&copy; 2024 ChatInvoice. All rights reserved.</p>
      </footer>
    </main>
  );
}