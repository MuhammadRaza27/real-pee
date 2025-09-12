import { Routes, Route } from 'react-router-dom'
import Signup from './auth/Signup'
import Login from './auth/Login'
import Forgot from './auth/Forgot'
import SetNewP from './auth/SetNewP'
import Dashboard from './auth/Dashboard'
import Navigation from './navigation/Navigation'

function App() {
  return (
    <div className="bg-[#ffff] text-ink font-sans">
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/setnewpassword" element={<SetNewP />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App