import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ConversationalLearning from '../../components/ConversationalLearning'
import { modules, moduleList } from '../../data/conversationalModules'

const LearnModule = () => {
  const { moduleId } = useParams()
  const [module, setModule] = useState(null)
  
  useEffect(() => {
    // Get the module data
    const moduleData = modules[moduleId]
    setModule(moduleData)
    
    // Update document title
    if (moduleData) {
      document.title = `${moduleData.moduleTitle} - Programming Languages Learning`
    }
  }, [moduleId])
  
  // If module not found
  if (!module) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Module Not Found</h1>
          <p className="text-slate-600 mb-6">Sorry, the module you're looking for doesn't exist or hasn't been created yet.</p>
          
          <Link
            to="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors font-medium inline-block"
          >
            Return to Home
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <Link to="/" className="text-slate-600 hover:text-slate-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Modules
        </Link>
      </div>
      
      {/* Module learning component */}
      <ConversationalLearning module={module} />
      
      {/* Navigation links to other modules */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Available Modules</h2>
        
        <div className="space-y-3">
          {moduleList.map((mod) => (
            <Link
              key={mod.id}
              to={`/learn/${mod.id}`}
              className={`block p-4 rounded-lg border ${
                mod.id === moduleId 
                  ? 'bg-blue-50 border-blue-200 text-blue-800' 
                  : 'hover:bg-slate-50 border-slate-200'
              }`}
            >
              <h3 className="font-semibold">{mod.title}</h3>
              <p className="text-sm text-slate-600">{mod.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LearnModule
