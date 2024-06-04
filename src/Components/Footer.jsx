import React from 'react'

function Footer() {
  const year = new Date().getFullYear();
  return (
    
      <div className='bg-slate-500 '>
        <footer className='flex justify-between text-black items-center text-center'>
      <div>
        JSON-SERVER
      </div>
      {/* <div className=' flex align-stretch items-center text-center'> */}
        <div>
          <h4>socials</h4>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

        <div>
        <h4>Quicklinks</h4>
        <ul>
          <li>Blog</li>
          <li>COntact</li>
          <li>About</li>
          <li>Hotech School</li>
        </ul>
        </div>

      {/* </div> */}
      
        </footer>
        <hr className='h-1 bg-black w-[100%]' />
        <p className='text-center'> &copy; <span text-blue-500>{year}</span> JSON-SERVER. All rights are reserved. </p>
    </div>

  )
}

export default Footer