import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  poemsList, 
  londonQuotes, 
  bayonetChargeQuotes, 
  remainsQuotes, 
  kamikazeQuotes, 
  mldQuotes 
} from '../data/quotesData'

const PoemQuotes = () => {
  const { poemId } = useParams()
  const [poem, setPoem] = useState(null)
  const [quotes, setQuotes] = useState([])
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [isPracticeMode, setIsPracticeMode] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  // Get the corresponding quotes based on the poem ID
  useEffect(() => {
    const foundPoem = poemsList.find(p => p.id === poemId)
    setPoem(foundPoem)
    
    let poemQuotes = []
    switch (poemId) {
      case 'london':
        poemQuotes = londonQuotes
        break
      case 'bayonet-charge':
        poemQuotes = bayonetChargeQuotes
        break
      case 'remains':
        poemQuotes = remainsQuotes
        break
      case 'kamikaze':
        poemQuotes = kamikazeQuotes
        break
      case 'mld':
        poemQuotes = mldQuotes
        break
      default:
        poemQuotes = []
    }
    
    setQuotes(poemQuotes)
    
    // Count total questions
    let total = 0
    poemQuotes.forEach(quote => {
      total += quote.practice ? quote.practice.length : 0
    })
    setTotalQuestions(total)
    
    // Reset state
    setCurrentQuoteIndex(0)
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setIsPracticeMode(false)
    setCorrectCount(0)
    
    if (poemQuotes.length > 0 && poemQuotes[0].practice) {
      setCurrentQuestion(poemQuotes[0].practice[0])
    }

    // Update document title
    if (foundPoem) {
      document.title = `${foundPoem.title} - English GCSE Revision`
    }
  }, [poemId])

  // Handle option selection
  const handleOptionSelect = (option) => {
    if (isAnswered) return
    setSelectedOption(option)
  }

  // Check answer
  const checkAnswer = () => {
    if (!selectedOption || isAnswered) return
    
    setIsAnswered(true)
    
    if (selectedOption === currentQuestion.answer) {
      setCorrectCount(prev => prev + 1)
    }
  }

  // Move to next question
  const nextQuestion = () => {
    const currentQuote = quotes[currentQuoteIndex]
    
    // Check if there are more questions in current quote
    if (currentQuestionIndex < currentQuote.practice.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setCurrentQuestion(currentQuote.practice[currentQuestionIndex + 1])
      setSelectedOption(null)
      setIsAnswered(false)
      return
    }
    
    // Check if there are more quotes
    if (currentQuoteIndex < quotes.length - 1) {
      setCurrentQuoteIndex(currentQuoteIndex + 1)
      setCurrentQuestionIndex(0)
      setCurrentQuestion(quotes[currentQuoteIndex + 1].practice[0])
      setSelectedOption(null)
      setIsAnswered(false)
      return
    }
    
    // If we've gone through all quotes and questions, reset to beginning
    setCurrentQuoteIndex(0)
    setCurrentQuestionIndex(0)
    setCurrentQuestion(quotes[0].practice[0])
    setSelectedOption(null)
    setIsAnswered(false)
  }

  // Navigate between quotes
  const navigateQuote = (direction) => {
    let newIndex
    
    if (direction === 'next') {
      newIndex = (currentQuoteIndex + 1) % quotes.length
    } else {
      newIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length
    }
    
    setCurrentQuoteIndex(newIndex)
    setCurrentQuestionIndex(0)
    
    if (quotes[newIndex].practice) {
      setCurrentQuestion(quotes[newIndex].practice[0])
    }
    
    setSelectedOption(null)
    setIsAnswered(false)
  }

  // Toggle between quote view and practice mode
  const togglePracticeMode = () => {
    setIsPracticeMode(!isPracticeMode)
    setSelectedOption(null)
    setIsAnswered(false)
    
    if (!isPracticeMode && quotes[currentQuoteIndex].practice) {
      setCurrentQuestion(quotes[currentQuoteIndex].practice[currentQuestionIndex])
    }
  }

  // If data isn't loaded yet
  if (!poem || quotes.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-lg text-slate-600">Loading...</p>
      </div>
    )
  }

  const currentQuote = quotes[currentQuoteIndex]

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back button and mode toggle */}
      <div className="flex justify-between items-center mb-6">
        <Link to="/quotes" className="text-slate-600 hover:text-slate-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Poems
        </Link>
        
        <button
          onClick={togglePracticeMode}
          className={`px-4 py-2 rounded-lg transition-colors font-medium ${
            isPracticeMode 
              ? 'bg-slate-600 text-white hover:bg-slate-700' 
              : 'bg-emerald-600 text-white hover:bg-emerald-700'
          }`}
        >
          {isPracticeMode ? 'View Quote' : 'Practice Questions'}
        </button>
      </div>
      
      {/* Poem information */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">{poem.title}</h1>
        <div className="flex items-center mb-4">
          <span className="text-slate-600">By {poem.author}</span>
          <span className="mx-2 text-slate-300">•</span>
          <span className="text-slate-600 bg-slate-100 px-2 py-1 rounded">{poem.form}</span>
        </div>
        <p className="text-slate-600">{poem.description}</p>
      </div>
      
      {isPracticeMode ? (
        // Practice mode
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-slate-800">
              Practice Questions
            </h2>
            <div className="text-slate-600">
              Score: {correctCount}/{totalQuestions}
            </div>
          </div>
          
          <div className="mb-6">
            <p className="italic text-slate-600 mb-4">"{currentQuote.quote}"</p>
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
      ) : (
        // Quote view mode
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-slate-800">
              Quote {currentQuoteIndex + 1} of {quotes.length}
            </h2>
            
            <div className="flex space-x-2">
              <button
                onClick={() => navigateQuote('prev')}
                className="p-2 rounded-full hover:bg-slate-100"
                aria-label="Previous quote"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                onClick={() => navigateQuote('next')}
                className="p-2 rounded-full hover:bg-slate-100"
                aria-label="Next quote"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <blockquote className="border-l-4 border-slate-300 pl-4 mb-6">
            <p className="text-xl italic text-slate-800 mb-2">"{currentQuote.quote}"</p>
          </blockquote>
          
          <div className="mb-6">
            <h3 className="font-semibold text-slate-700 mb-2">Literary Devices:</h3>
            <ul className="space-y-3 mb-4">
              {currentQuote.devices.map((device, index) => (
                <li key={index} className="bg-slate-50 p-3 rounded-lg">
                  <span className="font-semibold text-slate-800">{device.name}:</span>{' '}
                  <span className="text-slate-600">{device.explanation}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2">Analysis for Essays:</h3>
            <p className="text-blue-800">{currentQuote.analysis}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default PoemQuotes