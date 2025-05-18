import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-slate-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">Programming Languages Learning</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-emerald-300 transition-colors">Home</Link>
          <Link to="/module/module1" className="hover:text-emerald-300 transition-colors">Module 1</Link>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden container mx-auto mt-2 pb-2">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="block hover:bg-slate-700 px-3 py-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/module/module1" 
              className="block hover:bg-slate-700 px-3 py-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Module 1: Introduction to Programming Languages
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar