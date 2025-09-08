import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../auth/login.jsx'
import Signup from '../auth/Signup.jsx'
import Forgot from '../auth/forgot.jsx'
import SetNewP from '../auth/SetNewP.jsx'


const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/setnewpassword" element={<SetNewP />} />
    </Routes>
  )
}

export default Navigation