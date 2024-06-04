import { useEffect, useState } from "react"
import React  from 'react'
import axios from "axios";

function Reviews() {
  const[reviews,setReviews]=useState([])

      useEffect(()=>{
        axios.get("http://localhost:3000/reviews")
        .then(response=>setReviews(response.data))
        .catch(err=>console.log("error"))

      },[]);
  return (
    <div className="h-80 bg-black text-white">
      <table className="border m-auto border-separate border-spacing-2 border-slate-200">
        <thead>
          <tr>
          <th className="border border-slate-300">ID</th>
          <th className="border border-slate-300">Title</th>
          <th className="border border-slate-300">Review</th>
          <th className="border border-slate-300">Rating</th></tr>
        </thead>
        <tbody>
        {reviews.map((review,index)=>{
          return(
           <tr key={index}>
           <td className="border border-slate-300">{review.id}</td>
           <td className="border border-slate-300">{review.title}</td>
           <td className="border border-slate-300">{review.review}</td>
           <td className="border border-slate-300">{review.rating}</td>
           </tr>
          )
        })}
        </tbody>
      </table>
      
      
    </div>
  )
}

export default Reviews