import React, { useState } from 'react'
import logoImage from '../assets/logo.image.svg'
import bgImage from '../assets/bg-image.svg'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button.jsx'
import { Input } from '../components/ui/input.jsx'
import { Label } from '../components/ui/label.jsx'

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form data:', formData)
    alert('Logged in successfully (demo)')
    // Navigate to dashboard after alert
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2 overflow-hidden">
      {/* LEFT: Sign up */}
      <section className="flex items-center justify-center py-6 px-6 md:px-10 md:py-10 bg-white">
        <div className="w-full max-w-[360px]">
          <div className="flex items-center justify-center">
            <img src={logoImage} alt="Logo" className="w-[54px] h-[54px]" />
          </div>
          <h1 className="text-2xl font-semibold text-center mt-6 mb-6">Log In</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="block mb-1.5">Email</Label>
              <Input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required 
                placeholder="Enter your email"
                className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-[15px] outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
              />
            </div>

            <div>
              <Label className="block mb-1.5 mt-5">Password</Label>
              <div className="relative">
                <Input 
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required 
                  minLength="6" 
                  placeholder="Create a password"
                  className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 pr-11 text-[15px] outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                />
                <button 
                  type="button" 
                  onClick={togglePasswordVisibility}
                  className={`absolute inset-y-0 right-0 px-3 text-soft hover:text-ink/80 ${showPassword ? 'text-ink' : ''}`}
                  aria-label="Show/Hide password"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </button>
              </div>
            </div>

            <div class="flex justify-between items-center flex-wrap gap-3 py-5">
             <span class="flex items-center gap-2 text-sm font-medium text-[#344054]"><input type="checkbox"/>Remember for 30 days</span>
            <span class="text-[#00875A]">
            <Link to="/forgot"> Forgot password?</Link>
            </span>
           </div>


<div className='flex flex-col gap-2'>

            <Button 
            variant={"default"}
              type="submit"
              className='!bg-[#00875A] text-white'
            >
              Sign in
            </Button>

            <Button 
            variant={"outline"}
           
            >
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.8 31.9 29.3 35 24 35c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.3 0 6.3 1.2 8.6 3.3l5.7-5.7C34.6 3.1 29.6 1 24 1 11.8 1 2 10.8 2 23s9.8 22 22 22 22-9.8 22-22c0-1.5-.2-3-.4-4.5z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15 19 12 24 12c3.3 0 6.3 1.2 8.6 3.3l5.7-5.7C34.6 3.1 29.6 1 24 1 15 1 7.5 6 3.7 13.2z"/>
                <path fill="#4CAF50" d="M24 45c5.2 0 10.1-2 13.7-5.2l-6.3-5.2C29.2 36.3 26.8 37 24 37c-5.2 0-9.6-3.3-11.6-7.8l-6.6 5.1C8.6 40.9 15.8 45 24 45z"/>
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1 3.1-3.3 5.7-6.2 7.3l6.3 5.2C38.5 38.5 42 31.9 42 24c0-1.5-.2-3-.4-4.5z"/>
              </svg>
              Sign up with Google
            </Button>
</div>
            <p className="text-center text-sm text-[#667085]">
              Don't have an account?
              <Link to="/signup" className="text-brand text-[#00875A] font-medium hover:underline ml-1">Sign up</Link>
            </p>
          </form>
        </div>
      </section>

      {/* RIGHT: ONLY the picture */}
      <section className="relative bg-[#F2F4F7] md:block hidden">
        {/* slim divider */}
        <div className="hidden md:block absolute left-0 top-0 h-full w-px bg-black/5"></div>

        <div className="h-full w-full flex items-center justify-end md:pl-10 md:py-10">
          <div className="rounded-tl-[12px] rounded-bl-[12px] shadow-card border-t-4 border-b-4 border-l-4 border-[#101828]">
            {/* 👇 apni image ka path/naam yahan lagao */}
            <img
              src={bgImage}
              alt="Preview"
              className="max-h-[682px] w-auto block object-contain select-none"
              draggable="false"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login