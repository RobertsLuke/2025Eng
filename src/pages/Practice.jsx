import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { wordClassesData, languageDevicesData, moreLanguageDevicesData } from '../data/practiceData'

const Practice = () => {
  const { topic } = useParams()
  const [data, setData] = useState([])
  const [currentItem, setCurrentItem] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  // Load data based on topic
  useEffect(() => {
    let topicData
    let topicTitle

    switch (topic) {
      case 'word-classes':
        topicData = wordClassesData
        topicTitle = 'Word Classes'
        break
      case 'language-devices':
        topicData = languageDevicesData
        topicTitle = 'Language Devices'
        break
      case 'more-devices':
        topicData = moreLanguageDevicesData
        topicTitle = 'More Language Devices'
        break
      default:
        topicData = []
        topicTitle = 'Practice'
    }

    setData(topicData)
    if (topicData.length > 0) {
      setCurrentItem(topicData[0])
      
      // Count total questions
      let total = 0
      topicData.forEach(item => {
        total += item.practice ? item.practice.length : 0
      })
      setTotalQuestions(total)
    }
    
    // Reset state when topic changes
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setCorrectCount(0)

    // Update document title
    document.title = `${topicTitle} - English GCSE Revision`
  }, [topic])

  // Handle option selection
  const handleOptionSelect = (option) => {
    if (isAnswered) return
    setSelectedOption(option)
  }

  // Check answer
  const checkAnswer = () => {
    if (!selectedOption || isAnswered) return
    
    setIsAnswered(true)
    
    if (selectedOption === currentItem.practice[currentQuestionIndex].answer) {
      setCorrectCount(prev => prev + 1)
    }
  }

  // Move to next question
  const nextQuestion = () => {
    // Check if there are more questions in current item
    if (currentQuestionIndex < currentItem.practice.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedOption(null)
      setIsAnswered(false)
      return
    }
    
    // Find the index of current item
    const currentItemIndex = data.findIndex(item => item.id === currentItem.id)
    
    // Check if there are more items
    if (currentItemIndex < data.length - 1) {
      setCurrentItem(data[currentItemIndex + 1])
      setCurrentQuestionIndex(0)
      setSelectedOption(null)
      setIsAnswered(false)
      return
    }
    
    // If we've gone through all items and questions, reset to beginning
    setCurrentItem(data[0])
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
  }

  // If data isn't loaded yet
  if (!data.length || !currentItem) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg text-slate-600">Loading...</p>
      </div>
    )
  }

  const currentQuestion = currentItem.practice[currentQuestionIndex]

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back button and progress display */}
      <div className="flex justify-between items-center mb-6">
        <Link to="/" className="text-slate-600 hover:text-slate-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back
        </Link>
        <div className="text-slate-600">
          Score: {correctCount}/{totalQuestions}
        </div>
      </div>
      
      {/* Term information */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-3">{currentItem.term}</h2>
        <p className="text-slate-600 mb-4">{currentItem.definition}</p>
        
        <h3 className="font-semibold text-slate-700 mb-2">Examples:</h3>
        <ul className="list-disc list-inside mb-4 text-slate-600">
          {currentItem.examples.map((example, index) => (
            <li key={index}>{example}</li>
          ))}
        </ul>
      </div>
      
      {/* Practice question */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="font-semibold text-slate-700 mb-4">
          Question {currentQuestionIndex + 1} of {currentItem.practice.length}:
        </h3>
        <p className="text-lg text-slate-800 mb-6">{currentQuestion.question}</p>
        
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              className={`w-full text-left p-4 rounded-lg transition-colors border ${
                selectedOption === option
                  ? isAnswered
                    ? option === currentQuestion.answer
                      ? 'bg-green-100 border-green-500 text-green-800'
                      : 'bg-red-100 border-red-500 text-red-800'
                    : 'bg-blue-100 border-blue-500 text-blue-800'
                  : isAnswered && option === currentQuestion.answer
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
        
        {isAnswered ? (
          <div className="mb-6">
            <div className={`p-4 rounded-lg ${
              selectedOption === currentQuestion.answer 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              <p className="font-semibold mb-1">
                {selectedOption === currentQuestion.answer ? 'Correct!' : 'Incorrect!'}
              </p>
              <p>{currentQuestion.explanation}</p>
            </div>
          </div>
        ) : null}
        
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
            onClick={nextQuestion}
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  )
}

export default Practice