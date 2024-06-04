import React, { useEffect , useState } from 'react'
import axios from 'axios'

function Books() {

  const [books, setBooks]=useState([]);
  // The empty array [] as the second argument means this effect runs once after the initial render.
  useEffect(()=>{
    axios.get("http://localhost:3000/books")
    .then(response=>setBooks(response.data))
    .catch(err=> console.log(err))
  },[])



  return (
  <div className='text-[#fff]  h-screen bg-[rgba(0,0,0,1)]'>
<table className='m-auto border-separate border-spacing-2 border border-slate-400'>
  <thead>
    <tr>
      <th className='border border-slate-300'>ID</th>
      <th className='border border-slate-300'>Title</th>
      <th className='border border-slate-300'>Author</th>
      <th className='border border-slate-300'>Year</th>
    
    </tr>
  </thead>
  <tbody>
    {books.map((book,index)=> {
      return(
        <tr key={index}>
        <td className='border border-slate-300'>{book.id}</td>
        <td className='border border-slate-300'>{book.title}</td>
        <td className='border border-slate-300'>{book.author}</td>
        <td className='border border-slate-300'>{book.year}</td>
        </tr>
      )
      })}
  </tbody>
</table>
      
    </div>
  )
}

export default Books