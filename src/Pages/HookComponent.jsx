import React, { useState } from 'react'

function HookComponent() {

  let initialCount=0;
 const [count, setCount]=useState(initialCount);

const incrementBy=()=>{
    for(let i=0; i<1;i++){
      setCount(prevCount=>prevCount+1);
    }
}

const decrementBy=()=>{
  for(let i=0; i<1;i++){
    setCount(prevCount=>prevCount-1);
  }

}
  return (
    <div className='py-10 h-80'>
      <div className='w-1/2 m-auto py-10 text-center text-white bg-black'>Count:{count}</div>
      <br />
            
      <div className='flex w-1/3 m-auto  justify-between'>
      <button className='bg-[rgba(47,102,47,1)] py-2 px-4 rounded-full'  onClick={incrementBy}> Increment</button>
       <button className='bg-[rgba(47,102,47,1)] py-2 px-4 rounded-full' onClick={()=>setCount(initialCount)}> reset</button>

          <button className='bg-[rgba(47,102,47,1)] py-2 px-4 rounded-full'  onClick={()=>{setCount(prevCount=>prevCount-1)}}> decrement</button>
        


      </div>
     
        


    </div>
  )
}

export default HookComponent