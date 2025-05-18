import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// Main component for conversational learning interface
const ConversationalLearning = ({ module }) => {
  const [conversationHistory, setConversationHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userOptions, setUserOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [moduleCompleted, setModuleCompleted] = useState(false);
  const [randomizedOptions, setRandomizedOptions] = useState([]);
  
  // Initialize or progress conversation
  useEffect(() => {
    if (!module || !module.conversation) return;
    
    // If we've reached the end of the conversation
    if (currentIndex >= module.conversation.length) {
      setModuleCompleted(true);
      return;
    }
    
    const currentStep = module.conversation[currentIndex];
    
    // Add the system message to the conversation history
    if (currentStep.type === 'system' && !conversationHistory.some(item => item.id === currentStep.id)) {
      setConversationHistory(prev => [...prev, {
        id: currentStep.id,
        type: 'system',
        message: currentStep.message
      }]);
      
      // Randomize the order of the response options
      const options = [...currentStep.options];
      setRandomizedOptions(shuffleArray(options));
      setUserOptions(options);
      setSelectedOption(null);
      setIsAnswered(false);
    } else if (currentStep.type === 'quiz' && !conversationHistory.some(item => item.id === currentStep.id)) {
      setConversationHistory(prev => [...prev, {
        id: currentStep.id,
        type: 'quiz',
        message: currentStep.message
      }]);
      
      setUserOptions(currentStep.options);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  }, [module, currentIndex, conversationHistory]);
  
  // Fisher-Yates shuffle algorithm for randomizing button options
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };
  
  // Handle user selecting a response option
  const handleOptionSelect = (option, index) => {
    if (isAnswered) return;
    
    const currentStep = module.conversation[currentIndex];
    
    if (currentStep.type === 'system') {
      // Add user response to conversation history
      setConversationHistory(prev => [...prev, {
        id: `user-${currentStep.id}`,
        type: 'user',
        message: option
      }]);
      
      // Move to next conversation step
      setCurrentIndex(currentIndex + 1);
    } else if (currentStep.type === 'quiz') {
      setSelectedOption(option);
      setIsAnswered(true);
      
      // Add user response to conversation history
      setConversationHistory(prev => [...prev, {
        id: `user-${currentStep.id}`,
        type: 'user',
        message: option.text,
        isCorrect: option.correct
      }]);
      
      // Add explanation to conversation history
      setConversationHistory(prev => [...prev, {
        id: `explanation-${currentStep.id}`,
        type: 'explanation',
        message: currentStep.explanation,
        isCorrect: option.correct
      }]);
    }
  };
  
  // Handle continuing after a quiz question
  const handleContinue = () => {
    setIsAnswered(false);
    setSelectedOption(null);
    setCurrentIndex(currentIndex + 1);
  };
  
  // Render initial module intro before conversation starts
  if (conversationHistory.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">{module.moduleTitle}</h1>
        <p className="text-slate-600 mb-6">{module.moduleDescription}</p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="font-semibold text-blue-800 mb-2">How this works:</p>
          <p className="text-blue-700">
            This is an interactive conversation! I'll explain programming domains to you bit by bit, 
            and you can respond to show you understand or ask for more information.
          </p>
        </div>
        
        <button
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center"
          onClick={() => setCurrentIndex(0)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
          Start Conversation
        </button>
      </div>
    );
  }
  
  // Render module completion screen
  if (moduleCompleted) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-slate-800 mb-2">{module.completion.message}</h1>
        <p className="text-slate-600 mb-6">You've gained a solid understanding of programming domains through conversation.</p>
        
        {module.completion.nextModule && (
          <Link
            to={`/learn/${module.completion.nextModule}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors font-medium inline-block"
          >
            Continue to Next Module
          </Link>
        )}
      </div>
    );
  }

  // Render the conversation
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Conversation history */}
      <div className="mb-6 space-y-4 max-h-[60vh] overflow-y-auto p-2">
        {conversationHistory.map((item, index) => (
          <div key={item.id} className={`flex ${item.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`rounded-lg p-4 max-w-3/4 ${getMessageStyle(item)}`}
            >
              {item.type === 'system' || item.type === 'quiz' ? (
                <ReactMarkdown className="prose prose-slate max-w-none whitespace-pre-wrap">
                  {item.message}
                </ReactMarkdown>
              ) : (
                <p>{item.message}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Response options */}
      {userOptions.length > 0 && currentIndex < module.conversation.length && !isAnswered && (
        <div className="space-y-3">
          {module.conversation[currentIndex].type === 'system' ? (
            <div className="flex flex-wrap gap-2">
              {randomizedOptions.map((option, index) => (
                <button
                  key={index}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm md:text-base"
                  onClick={() => handleOptionSelect(option, index)}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {userOptions.map((option, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-4 rounded-lg transition-colors border ${selectedOption === option
                    ? option.correct
                      ? 'bg-green-100 border-green-500 text-green-800'
                      : 'bg-red-100 border-red-500 text-red-800'
                    : 'bg-white border-slate-300 hover:bg-slate-50'
                  }`}
                  onClick={() => handleOptionSelect(option, index)}
                >
                  {option.text}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
      
      {/* Continue button after quiz answer */}
      {isAnswered && (
        <button
          className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors font-medium"
          onClick={handleContinue}
        >
          Continue
        </button>
      )}
    </div>
  );
};

// Helper function for styling messages based on type
const getMessageStyle = (item) => {
  switch (item.type) {
    case 'system':
      return 'bg-slate-100 text-slate-800';
    case 'user':
      return 'bg-blue-600 text-white';
    case 'explanation':
      return item.isCorrect 
        ? 'bg-green-100 text-green-800 border border-green-200' 
        : 'bg-red-100 text-red-800 border border-red-200';
    default:
      return 'bg-slate-100 text-slate-800';
  }
};

export default ConversationalLearning;