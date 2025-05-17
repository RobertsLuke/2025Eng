import { Link } from 'react-router-dom'
import { poemsList } from '../data/quotesData'

const PoemsSelection = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <Link to="/" className="text-slate-600 hover:text-slate-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Key Poems</h1>
      <p className="text-lg text-slate-600 mb-8">
        Select a poem to study key quotes, devices, and practice analysis questions.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {poemsList.map((poem) => (
          <Link 
            key={poem.id}
            to={`/quotes/${poem.id}`}
            className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-xl font-bold text-slate-800 mb-2">{poem.title}</h2>
            <div className="flex items-center mb-3">
              <span className="text-slate-500 text-sm">{poem.author}</span>
              <span className="mx-2 text-slate-300">•</span>
              <span className="text-slate-500 text-sm bg-slate-100 px-2 py-1 rounded">{poem.form}</span>
            </div>
            <p className="text-slate-600">{poem.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PoemsSelection