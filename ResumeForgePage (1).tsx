import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'

export default function ResumeForgePage() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [email, setEmail] = useState('')
  const [activeQuestion, setActiveQuestion] = useState(null)
  const [buttonText, setButtonText] = useState('Join Waitlist')
  const confettiRef = useRef(null)

  const features = [
    { title: 'AI-Powered Resume Creation', description: 'Leverage cutting-edge AI to craft professional resumes in minutes.' },
    { title: 'Customizable Templates', description: 'Choose from a variety of industry-specific templates to stand out.' },
    { title: 'Keyword Optimization', description: 'Automatically optimize your resume for ATS systems to increase your chances.' },
    { title: 'Real-Time Editing', description: 'Edit and update your resume in real-time with instant AI suggestions.' },
    { title: 'Multi-Format Export', description: 'Export your resume in multiple formats including PDF, Word, and plain text.' },
    { title: 'Career Insights', description: 'Get personalized career insights and job market trends based on your profile.' },
  ]

  const faqItems = [
    { question: 'How does Resume Forage work?', answer: 'Resume Forage uses advanced AI to analyze your input and create a tailored, professional resume. Simply input your details, and our AI will generate a polished resume instantly.' },
    { question: 'Is my data secure?', answer: 'Absolutely. We use state-of-the-art encryption to protect your personal information. Your data is never shared or sold to third parties.' },
    { question: 'Can I edit the AI-generated resume?', answer: 'Yes! While our AI creates an excellent base, you have full control to edit and customize your resume to your liking.' },
    { question: 'How much does it cost?', answer: 'We offer both free and premium plans. Check out our pricing section for more details on what each plan includes.' },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setButtonText('Thanks!')
    setShowConfetti(true)
    setTimeout(() => {
      setShowConfetti(false)
      setButtonText('Join Waitlist')
      setEmail('')
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-gradient animate-gradient">
      <style jsx global>{`
     .bg-gradient {
       background: linear-gradient(-45deg, #ff6b6b, #cc2ed1, #7928ca, #ff8f70);
       background-size: 400% 400%;
       animation: gradient 10s ease infinite;
     }
     @keyframes gradient {
       0% { background-position: 0% 50%; }
       50% { background-position: 100% 50%; }
       100% { background-position: 0% 50%; }
     }
     .animate-gradient-x {
       animation: gradient-x 10s ease infinite;
     }
     @keyframes gradient-x {
       0%, 100% { background-size: 200% 200%; background-position: left center; }
       50% { background-size: 200% 200%; background-position: right center; }
     }
   `}</style>
      {showConfetti && <Confetti ref={confettiRef} />}

      <header className="bg-white bg-opacity-90 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">Resume Forage</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="text-purple-600 hover:text-purple-800" onClick={(e) => { e.preventDefault(); document.querySelector('#features').scrollIntoView({ behavior: 'smooth' }); }}>Features</a></li>
              <li><a href="#about" className="text-purple-600 hover:text-purple-800" onClick={(e) => { e.preventDefault(); document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }); }}>About Us</a></li>
              <li><a href="#contact" className="text-purple-600 hover:text-purple-800" onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20 bg-gradient animate-gradient-x">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Create AI-Powered Resumes in Minutes</h2>
            <p className="text-xl text-white mb-8">Join the waitlist for early access!</p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="bg-white text-purple-600 px-6 py-2 rounded-r-lg hover:bg-purple-100 transition duration-300">
                  {buttonText}
                </button>
              </div>
            </form>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-purple-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">Launching Soon</h2>
          </div>
        </section>

        <section id="faq" className="py-20 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <div key={index} className="mb-4">
                  <button
                    className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-md hover:bg-purple-100 transition duration-300"
                    onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  >
                    <span className="font-semibold text-purple-600">{item.question}</span>
                    <span className="text-purple-600">{activeQuestion === index ? '−' : '+'}</span>
                  </button>
                  {activeQuestion === index && (
                    <div className="mt-2 p-4 bg-white rounded-lg shadow-md">
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">Pricing Plans</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="w-full md:w-80 p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-purple-600 mb-4">Free</h3>
                <p className="text-4xl font-bold mb-6">$0<span className="text-sm font-normal">/month</span></p>
                <ul className="mb-6 space-y-2">
                  <li>✓ Basic AI resume creation</li>
                  <li>✓ 1 resume template</li>
                  <li>✓ Limited edits</li>
                </ul>
                <p className="text-purple-600 font-semibold">Launching Soon</p>
              </div>
              <div className="w-full md:w-80 p-6 bg-gradient animate-gradient rounded-lg shadow-md text-white">
                <h3 className="text-2xl font-bold mb-4">Premium</h3>
                <p className="text-4xl font-bold mb-6">$19<span className="text-sm font-normal">/month</span></p>
                <ul className="mb-6 space-y-2">
                  <li>✓ Advanced AI resume creation</li>
                  <li>✓ Unlimited templates</li>
                  <li>✓ Unlimited edits</li>
                  <li>✓ ATS optimization</li>
                  <li>✓ Career insights</li>
                </ul>
                <p className="text-white font-semibold">Launching Soon</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">About Us</h2>
            <p className="text-center text-gray-700 max-w-2xl mx-auto">
              Resume Forage is a cutting-edge platform that leverages AI technology to revolutionize the way job seekers create and optimize their resumes. Our mission is to empower individuals in their career journeys by providing intelligent, personalized resume solutions.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-purple-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Resume Forage</h3>
              <p>Empowering your career with AI-driven resumes.</p>
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-purple-300" onClick={(e) => { e.preventDefault(); document.querySelector('#features').scrollIntoView({ behavior: 'smooth' }); }}>Features</a></li>
                <li><a href="#about" className="hover:text-purple-300" onClick={(e) => { e.preventDefault(); document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }); }}>About Us</a></li>
                <li><a href="#contact" className="hover:text-purple-300" onClick={(e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); }}>Contact</a></li>
              </ul>
            </div>
          </div>
          <div id="contact" className="mt-8 text-center">
            <p className="mb-2">Contact: contact@resumeforage.online</p>
            <p>&copy; 2023 Resume Forage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}