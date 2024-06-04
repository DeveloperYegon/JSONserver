import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav className="flex text-black h-20 justify-between items-center bg-slate-500 ">
        <h3 className='text-black text-lg px-20'>JSON-SERVER
          <Link to="/"></Link>
          </h3>

      <ul className='flex items-center'>
        <li className='cursor-pointer px-3'>
          <Link to="/books">Books</Link>
        </li>
        <li className='cursor-pointer px-3'>
          <Link to="/reviews">Reviews</Link>
        </li> 
        <li className='cursor-pointer px-3'>
          <Link to="/classcomponent">CLass</Link>
        </li> 
        <li className='cursor-pointer px-3'>
          <Link to="/hookcomponent">Hook</Link>
        </li> 
        <li className='cursor-pointer px-3'>
          <Link to="/input">Input</Link>
        </li> 
        
      </ul>
    
    </nav>
  )
}
  
export default Navbar
