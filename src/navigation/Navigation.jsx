import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../auth/login.jsx'
import Signup from '../auth/Signup.jsx'
import Forgot from '../auth/Forgot.jsx'
import SetNewP from '../auth/SetNewP.jsx'
import Dashboard from '../auth/Dashboard.jsx'


const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/setnewpassword" element={<SetNewP />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default Navigation