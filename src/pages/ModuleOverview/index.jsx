import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { programmingLanguagesData } from '../../data/programmingLanguagesData'

const ModuleContent = ({ content }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">{content.term}</h2>
      <p className="text-slate-600 mb-4">{content.definition}</p>
      
      <h3 className="font-semibold text-slate-700 mb-2">Key Points:</h3>
      <ul className="list-disc list-inside mb-6 text-slate-600">
        {content.examples.map((example, index) => (
          <li key={index} className="mb-1">{example}</li>
        ))}
      </ul>
    </div>
  )
}

const QuizQuestion = ({ question, onComplete }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  
  const handleOptionSelect = (option) => {
    if (isAnswered) return
    setSelectedOption(option)
  }
  
  const checkAnswer = () => {
    if (!selectedOption || isAnswered) return
    setIsAnswered(true)
    const isCorrect = selectedOption === question.answer
    onComplete(isCorrect)
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <p className="text-lg text-slate-800 mb-6">{question.question}</p>
      
      <div className="space-y-3 mb-6">
        {question.options.map((option) => (
          <button
            key={option}
            className={`w-full text-left p-4 rounded-lg transition-colors border ${
              selectedOption === option
                ? isAnswered
                  ? option === question.answer
                    ? 'bg-green-100 border-green-500 text-green-800'
                    : 'bg-red-100 border-red-500 text-red-800'
                  : 'bg-blue-100 border-blue-500 text-blue-800'
                : isAnswered && option === question.answer
                ? 'bg-green-100 border-green-500 text-green-800'
                : 'bg-white border-slate-300 hover:bg-slate-50'
            }`}
            onClick={() => handleOptionSelect(option)}
            disabled={isAnswered}
          >
            {option}
          </button>
        ))}
      </div>
      
      {isAnswered && (
        <div className="mb-6">
          <div className={`p-4 rounded-lg ${
            selectedOption === question.answer 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            <p className="font-semibold mb-1">
              {selectedOption === question.answer ? 'Correct!' : 'Incorrect!'}
            </p>
            <p>{question.explanation}</p>
          </div>
        </div>
      )}
      
      {!isAnswered ? (
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors font-medium disabled:bg-slate-300 disabled:cursor-not-allowed"
          onClick={checkAnswer}
          disabled={!selectedOption}
        >
          Check Answer
        </button>
      ) : (
        <button
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors font-medium"
          onClick={() => {
            setSelectedOption(null)
            setIsAnswered(false)
          }}
        >
          Next
        </button>
      )}
    </div>
  )
}

const CheckpointModal = ({ isOpen, onClose, onContinue, score, totalQuestions }) => {
  if (!isOpen) return null
  
  const percentage = Math.round((score / totalQuestions) * 100)
  const passed = percentage >= 70
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Module Checkpoint</h2>
        
        <p className="mb-4">
          You've completed Module 1: Introduction to Programming Languages!
        </p>
        
        <div className={`p-4 rounded-lg mb-6 ${
          passed 
            ? 'bg-green-100 text-green-800 border border-green-200' 
            : 'bg-amber-100 text-amber-800 border border-amber-200'
        }`}>
          <p className="font-semibold">Your score: {score}/{totalQuestions} ({percentage}%)</p>
          {passed ? (
            <p>Congratulations! You've demonstrated a good understanding of programming language concepts.</p>
          ) : (
            <p>You might want to review the material again before moving on.</p>
          )}
        </div>
        
        <div className="flex justify-end gap-4">
          {!passed && (
            <button 
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded"
              onClick={onClose}
            >
              Review Material
            </button>
          )}
          <button 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
            onClick={onContinue}
          >
            {passed ? 'Continue to Next Module' : 'Try Again'}
          </button>
        </div>
      </div>
    </div>
  )
}

const ModuleOverview = () => {
  const { moduleId } = useParams()
  const [step, setStep] = useState('content') // 'content', 'quiz', 'checkpoint'
  const [currentContentIndex, setCurrentContentIndex] = useState(0)
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)
  const [showCheckpoint, setShowCheckpoint] = useState(false)
  
  useEffect(() => {
    // Count total questions across all content items
    const total = programmingLanguagesData.reduce((sum, item) => sum + item.practice.length, 0)
    setTotalQuestions(total)
    
    // Reset state when module changes
    setStep('content')
    setCurrentContentIndex(0)
    setCurrentQuizIndex(0)
    setScore(0)
    setShowCheckpoint(false)
    
    // Update document title
    document.title = `Module 1: Introduction to Programming Languages`
  }, [moduleId])
  
  const handleNextContent = () => {
    if (currentContentIndex < programmingLanguagesData.length - 1) {
      setCurrentContentIndex(currentContentIndex + 1)
    } else {
      setStep('quiz')
    }
  }
  
  const handlePrevContent = () => {
    if (currentContentIndex > 0) {
      setCurrentContentIndex(currentContentIndex - 1)
    }
  }
  
  const handleQuizCompletion = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    
    // Wait for the user to press "Next" before advancing
  }
  
  const handleNextQuestion = () => {
    // Find current content item
    const currentContentItem = programmingLanguagesData[currentQuizIndex]
    
    // If we've gone through all questions for the current content item
    if (currentQuizIndex < programmingLanguagesData.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1)
    } else {
      // If we've gone through all content items, show checkpoint
      setShowCheckpoint(true)
    }
  }
  
  const handleCloseCheckpoint = () => {
    setShowCheckpoint(false)
    setStep('content')
    setCurrentContentIndex(0)
    setCurrentQuizIndex(0)
    setScore(0)
  }
  
  const handleContinueToNextModule = () => {
    // For now, just go back to home since we only have one module
    window.location.href = '/'
  }
  
  if (programmingLanguagesData.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg text-slate-600">Loading...</p>
      </div>
    )
  }
  
  const currentContent = programmingLanguagesData[currentContentIndex]
  const currentQuizContent = programmingLanguagesData[currentQuizIndex]
  const currentQuizQuestion = currentQuizContent.practice[0] // Just get the first question for now

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header and progress */}
      <div className="flex justify-between items-center mb-6">
        <Link to="/" className="text-slate-600 hover:text-slate-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
        
        {step === 'quiz' && (
          <div className="text-slate-600">
            Quiz Progress: {currentQuizIndex + 1}/{programmingLanguagesData.length}
          </div>
        )}
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Module 1: Introduction to Programming Languages</h1>
        <p className="text-slate-600 mb-2">Learn about the basic concepts and categorization approaches for programming languages.</p>

        {/* Progress indicator */}
        <div className="flex items-center mb-6 mt-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
            step === 'content' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
          }`}>
            1
          </div>
          <div className="h-1 w-12 bg-slate-200 mx-2"></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
            step === 'quiz' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
          }`}>
            2
          </div>
          <div className="h-1 w-12 bg-slate-200 mx-2"></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
            showCheckpoint ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
          }`}>
            3
          </div>
          <div className="ml-3 text-slate-600">
            {step === 'content' && 'Learning concepts'}
            {step === 'quiz' && 'Testing knowledge'}
            {showCheckpoint && 'Checkpoint'}
          </div>
        </div>
      </div>
      
      {/* Content section */}
      {step === 'content' && (
        <>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <ModuleContent content={currentContent} />
            
            <div className="flex justify-between mt-6">
              <button
                className={`px-4 py-2 rounded ${
                  currentContentIndex > 0 
                    ? 'bg-slate-200 hover:bg-slate-300 text-slate-800' 
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
                onClick={handlePrevContent}
                disabled={currentContentIndex === 0}
              >
                Previous
              </button>
              <button
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                onClick={handleNextContent}
              >
                {currentContentIndex < programmingLanguagesData.length - 1 ? 'Next' : 'Start Quiz'}
              </button>
            </div>
          </div>
        </>
      )}
      
      {/* Quiz section */}
      {step === 'quiz' && (
        <>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{currentQuizContent.term}</h2>
            <p className="text-slate-600 mb-6">Test your understanding of this concept.</p>
            
            <QuizQuestion 
              question={currentQuizQuestion} 
              onComplete={handleQuizCompletion}
            />
            
            <div className="flex justify-end mt-6">
              <button
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
                onClick={handleNextQuestion}
              >
                {currentQuizIndex < programmingLanguagesData.length - 1 ? 'Next Topic' : 'Complete Module'}
              </button>
            </div>
          </div>
        </>
      )}
      
      {/* Checkpoint modal */}
      <CheckpointModal 
        isOpen={showCheckpoint}
        onClose={handleCloseCheckpoint}
        onContinue={handleContinueToNextModule}
        score={score}
        totalQuestions={totalQuestions}
      />
    </div>
  )
}

export default ModuleOverview
