import React ,{useState} from 'react'

function Input() {

const [name, setName] =useState({firstName:"", lastName:""})

  return (
    <div className='bg-gray'>
        <form action="" className='flex w-1/2 m-auto flex-col'>
            <label htmlFor="fname">FirstName:</label>
        <input type="text" id='fname' className="border border-slate-900 rounded-[10px] p-2" placeholder='First name' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})} />


        <label htmlFor="lname">LastName:</label>
        <input id="lname" className="border p-2 border-slate-900 rounded-[10px] " placeholder='Lastname' type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})} />
            
        </form>
        


        <hr className='my-3 bg-black'/>

        <p>Your first Name-{name.firstName}</p>
        <p>Your last Name-{name.lastName}</p>
        <p>{JSON.stringify(name)}</p>
    </div>
  )
}

export default Input