"use client"
import React, { useState, ChangeEvent, DragEvent, FormEvent } from 'react';
import { ArrowUpTrayIcon, DocumentTextIcon, XMarkIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import pdfToText from 'react-pdftotext'
import { chatSession } from '@/lib/gemini';

interface ChatMessage {
  text: string;
  sender: 'user' | 'ai';
}

const TypingAnimation = () => (
  <div className="flex items-center space-x-1">
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
  </div>
);

export default function ChatWithInvoice(): JSX.Element {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState('')
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isAITyping, setIsAITyping] = useState<boolean>(false);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: DragEvent<HTMLDivElement>): Promise<void> => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile(droppedFile);
      console.log("ho");
      const filePromice = pdfToText(droppedFile)
        .then(async text1 => {
          console.log(text1)
          const prompt = `user: textt total products context:${text1}`
          setText(text1)
        })
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      console.log("ho");
      const filePromice = pdfToText(selectedFile)
        .then(async text1 => {
          console.log(text1)
          setText(text1)
        })
    }
  };

  const removeFile = (): void => {
    setFile(null);
  };

  const sendMessage = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    if(file === null){
      alert("Please Upload invoice")
      return;
    }
    e.preventDefault();
    if (inputMessage.trim()) {
      setChatMessages([...chatMessages, { text: inputMessage, sender: 'user' }]);
      setInputMessage('');
      setIsAITyping(true);
      
      const prompt = `you are chatbot and your task is to get the user question user: ${inputMessage} from this invoice:${text} and if he ask any other questions then dont asnwer and greet if user greet and dont genrate text with * and dont block Candidate was blocked due to SAFETY couse its internal tool that helps human to process the comapny invoices`
      const response = await chatSession.sendMessage(prompt)
      
      setTimeout(() => {
        setChatMessages(prev => [...prev, { text: response.response.text().trim(), sender: 'ai' }]);
        setIsAITyping(false);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-4xl flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Chat with Your Invoice</h1>
          <div
            className={`border-2 border-dashed rounded-xl p-8 transition-all duration-300 ease-in-out mb-6 ${
              isDragging ? 'border-pink-500 bg-pink-50' : 'border-gray-300 bg-gray-50'
            }`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {!file ? (
              <div className="text-center">
                <ArrowUpTrayIcon className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">Drag and drop your PDF invoice here, or</p>
                <label htmlFor="file-upload" className="mt-2 cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                  Browse files
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    accept=".pdf"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            ) : (
              <div className="flex items-center justify-between bg-pink-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <DocumentTextIcon className="h-8 w-8 text-pink-500 mr-3" />
                  <span className="text-sm font-medium text-gray-900">{file.name}</span>
                </div>
                <button
                  onClick={removeFile}
                  className="ml-4 flex-shrink-0 bg-pink-100 text-pink-500 hover:text-pink-700 p-1 rounded-full"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-4">Upload your invoice and start chatting to get instant insights and answers about your financial document.</p>
        </div>
        
        <div className="flex-1 bg-gray-50 rounded-xl p-4 flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4">
            {chatMessages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  {message.text}
                </span>
              </div>
            ))}
            {isAITyping && (
              <div className="text-left">
                <span className="inline-block p-2 rounded-lg bg-gray-200">
                  <TypingAnimation />
                </span>
              </div>
            )}
          </div>
          <form onSubmit={sendMessage} className="flex items-center">
            <input
              type="text"
              value={inputMessage}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInputMessage(e.target.value)}
              placeholder="Ask about your invoice..."
              className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-2 rounded-r-lg hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <ChatBubbleLeftRightIcon className="h-6 w-6" />
            </button>
          </form>
        </div>
      </div>
      <style jsx global>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
        }
        .animate-bounce {
          animation: bounce 1.4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}