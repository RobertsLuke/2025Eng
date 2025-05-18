import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'

// Feature card component
const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="p-6 border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
      <div className="text-emerald-600 mb-3">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-slate-800">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  )
}

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Programming Languages Learning
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Welcome to your interactive programming languages learning platform. Learn about different programming languages, their categorizations, and applications.
        </p>

        {/* How to use this app */}
        <div className="mb-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors font-medium w-full"
          >
            How to Use This App
          </button>
        </div>
        
        <div className="flex flex-col gap-4 mb-8">
          <Link 
            to="/module/module1" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg text-center transition-colors font-medium"
          >
            Module 1: Traditional Learning
          </Link>
          <Link 
            to="/learn/programming-domains" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center transition-colors font-medium"
          >
            Interactive Learning: Programming Domains
          </Link>
          <Link 
            to="/learn/language-categories-uses" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-center transition-colors font-medium"
          >
            Interactive Learning: Language Categories
          </Link>
          <Link 
            to="#" 
            className="bg-gray-400 text-white px-6 py-3 rounded-lg text-center transition-colors font-medium cursor-not-allowed"
            onClick={(e) => e.preventDefault()}
          >
            Module 2: Programming Domains (Coming Soon)
          </Link>
        </div>
      </section>
      
      <section className="grid md:grid-cols-3 gap-8 mb-12">
        <FeatureCard 
          title="Programming Basics" 
          description="Learn about the fundamental concepts of programming languages and how they're categorized."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 18l6-6-6-6"></path>
              <path d="M8 6l-6 6 6 6"></path>
            </svg>
          } 
        />
        <FeatureCard 
          title="Language Paradigms" 
          description="Explore different programming paradigms like procedural, object-oriented, functional, and logic programming."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          } 
        />
        <FeatureCard 
          title="Interactive Learning" 
          description="Test your knowledge with quizzes and interactive exercises to reinforce your understanding of programming concepts."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          } 
        />
      </section>

      {/* How to Answer Questions Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="How to Use This App"
      >
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
              <span className="font-bold">1</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-800 mb-1">LEARN THE CONCEPTS</h3>
              <p className="text-slate-700">
                Begin with the learning modules that present programming language concepts in an organized, step-by-step manner. Each section builds on previous knowledge.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
              <span className="font-bold">2</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-800 mb-1">TEST YOUR KNOWLEDGE</h3>
              <p className="text-slate-700">
                After studying each section, test your understanding with interactive quizzes designed to reinforce key concepts and help you identify areas that need more review.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
              <span className="font-bold">3</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-800 mb-1">TRACK YOUR PROGRESS</h3>
              <p className="text-slate-700">
                Monitor your learning journey through checkpoints that confirm your understanding before advancing to more complex topics. Review material as needed until you feel confident.
              </p>
              <div className="mt-2 bg-slate-100 p-3 rounded-lg border-l-4 border-amber-600">
                <p className="italic text-slate-600">
                  "Learning programming languages is about understanding concepts, not just memorizing syntax. Focus on the underlying principles and how different languages implement them."
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Home