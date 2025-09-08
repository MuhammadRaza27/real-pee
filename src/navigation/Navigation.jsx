import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../auth/login'
import Signup from '../auth/Signup'
import Forgot from '../auth/forgot'
import SetNewP from '../auth/SetNewP'


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