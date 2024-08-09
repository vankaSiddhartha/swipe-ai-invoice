import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <header className="w-full max-w-6xl flex justify-between items-center mb-16">
        <div className="text-2xl font-bold">ChatInvoice</div>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-indigo-200 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-indigo-200 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-indigo-200 transition-colors">Contact</a>
        </nav>
      </header>

      <div className="text-center mb-24 max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">Revolutionize Your Invoice Management with Chat and Swipe</h1>
        <p className="text-xl mb-10 text-indigo-100">Effortlessly handle invoices through intuitive chat interactions and swift swipe gestures</p>
        <button className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-100 transition-colors shadow-lg">
          Start Your Free Trial
        </button>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
          <svg className="w-12 h-12 mb-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <h2 className="text-2xl font-bold mb-4">AI-Powered Chat Interface</h2>
          <p className="text-indigo-100">Interact with your invoices using natural language. Our AI understands context and provides intelligent responses.</p>
        </div>
        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
          <svg className="w-12 h-12 mb-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <h2 className="text-2xl font-bold mb-4">Intuitive Swipe Actions</h2>
          <p className="text-indigo-100">Approve, reject, or flag invoices with quick swipes. Streamline your workflow and boost productivity effortlessly.</p>
        </div>
        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
          <svg className="w-12 h-12 mb-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <h2 className="text-2xl font-bold mb-4">Real-time Analytics</h2>
          <p className="text-indigo-100">Gain valuable insights into your financial data with our advanced analytics dashboard and visualizations.</p>
        </div>
        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
          <svg className="w-12 h-12 mb-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <h2 className="text-2xl font-bold mb-4">Bank-grade Security</h2>
          <p className="text-indigo-100">Your data is protected with state-of-the-art encryption and security measures. We prioritize your privacy and compliance.</p>
        </div>
      </div>

      <footer className="w-full text-center pb-8 text-indigo-200">
        <p>&copy; 2024 ChatInvoice. All rights reserved.</p>
      </footer>
    </main>
  );
}