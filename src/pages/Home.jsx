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
          English GCSE Revision
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Welcome to your interactive English revision platform. Improve your knowledge and prepare for exams with our practice tools.
        </p>

        {/* How to answer questions button */}
        <div className="mb-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors font-medium w-full"
          >
            How to Answer Questions
          </button>
        </div>
        
        <div className="flex flex-col gap-4 mb-8">
          <Link 
            to="/practice/word-classes" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg text-center transition-colors font-medium"
          >
            Word Classes
          </Link>
          <Link 
            to="/practice/language-devices" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-center transition-colors font-medium"
          >
            Language Devices
          </Link>
          <Link 
            to="/practice/more-devices" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center transition-colors font-medium"
          >
            More Devices
          </Link>
          <Link 
            to="/quotes" 
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg text-center transition-colors font-medium"
          >
            Key Quotes
          </Link>
        </div>
      </section>
      
      <section className="grid md:grid-cols-3 gap-8 mb-12">
        <FeatureCard 
          title="Word Classes" 
          description="Learn about nouns, verbs, adjectives, and adverbs - the building blocks of language."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
          } 
        />
        <FeatureCard 
          title="Language Devices" 
          description="Practice identifying common literary techniques like metaphors, similes, and personification."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
              <path d="M12 13v8"></path>
              <path d="M12 3v3"></path>
            </svg>
          } 
        />
        <FeatureCard 
          title="More Devices" 
          description="Advanced techniques including pathetic fallacy, euphemism, emotive language, and more."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.452-.918-.902a2.99 2.99 0 0 0-3.949-2.132 3 3 0 0 0-1.865 2.929v1.616c0 .53-.211 1.039-.586 1.414l-.586.586a2 2 0 0 1-2.828 0l-.586-.586a1.993 1.993 0 0 1-.586-1.414v-1.511c0-.537-.188-1.053-.531-1.463a3.008 3.008 0 0 0-2.267-1.019c-.707 0-1.347.287-1.806.753l-1.465 1.443a2 2 0 0 1-2.773-.025L3.98 15.064a2 2 0 0 1-.026-2.773l1.443-1.464a2.524 2.524 0 0 0 .753-1.807c0-.863-.384-1.677-1.019-2.267A3.008 3.008 0 0 0 3.668 6.2v-1.42a1 1 0 0 1 1-1H7.88c.667 0 1.295-.26 1.768-.732l3.827-3.828a2 2 0 0 1 3.008.252l1.686 2.03a2 2 0 0 1-.29 2.95l-1.586 1.206a.997.997 0 0 0-.407.81c-.002.17.027.339.086.5a2.99 2.99 0 0 0 3.48 1.88Z"></path>
              <path d="m4.5 16.5 5-5"></path>
              <path d="M19 13v-3"></path>
            </svg>
          } 
        />
      </section>

      {/* How to Answer Questions Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="How to Answer English Questions"
      >
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
              <span className="font-bold">1</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-800 mb-1">READ THE QUESTION</h3>
              <p className="text-slate-700">
                Make sure you understand exactly what the question is asking. Identify the key words and focus on answering precisely what is being asked.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
              <span className="font-bold">2</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-800 mb-1">PICK A RELEVANT QUOTE</h3>
              <p className="text-slate-700">
                Select a quote from the text that will HELP you make a point which answers the question. Choose evidence that directly supports your argument.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
              <span className="font-bold">3</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-800 mb-1">ANALYZE THE LANGUAGE</h3>
              <p className="text-slate-700">
                Discuss language devices/word classes from that quote and describe WHY the author has used them. What is their impact/effect? Give detail!
              </p>
              <div className="mt-2 bg-slate-100 p-3 rounded-lg border-l-4 border-amber-600">
                <p className="italic text-slate-600">
                  "Don't just identify devices - explain how they create meaning and why they're important to the text as a whole. Always link back to the question!"
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