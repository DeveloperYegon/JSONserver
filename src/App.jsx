import { } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Books from './Pages/Books'
import Reviews from './Pages/Reviews'
import ClassCounter from './Pages/ClassCounter'
import HookComponent from './Pages/HookComponent'
import Input from './Pages/Input'


function App() {
  return (
    <div>

      <BrowserRouter>
            <Navbar/>
            <Routes>
              {/* <Route path='/' element={}/> */}
              <Route path="/books" element={<Books/>}/>
              <Route path="/reviews" element={<Reviews/>}/>
              <Route path="/classcomponent" element={<ClassCounter/>}/>
              <Route path="/hookcomponent" element={<HookComponent/>}/>
              <Route path="/input" element={<Input/>}/>

            </Routes>
            <Footer/>
      </BrowserRouter>
  </div>
  )
}

export default App