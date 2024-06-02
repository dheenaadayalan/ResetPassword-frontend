import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ForgetPassword from '../Pages/ForgetPassword'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import StringVerification from '../Pages/StringVerification'
import ChangePassword from '../Pages/ChangePassword'
import SignUp from '../Pages/SignUp'

function App() {
  const [email, setEmail] = useState('')

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login setEmail={setEmail}/>}></Route>
          <Route path='/signup' element={<SignUp setEmail={setEmail} />}></Route>
          <Route path='/forget/password' element={<ForgetPassword setEmail={setEmail}/>}></Route>
          <Route path='/verfication' element={<StringVerification userEmail={email}/>}></Route>
          <Route path='/change/password' element={<ChangePassword userEmail={email}/>}></Route>
          <Route path='/home' element={<Home userEmail={email}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
