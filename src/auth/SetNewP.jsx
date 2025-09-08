import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../assets/logo.image.svg'
import bgImage from '../assets/bg-image.svg'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'

const SetNewP = () => {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    
    if (password.length < 8) {
      alert('Password must be at least 8 characters long!')
      return
    }
    
    // Handle set new password logic here
    console.log('New password set:', password)
    alert('Password updated successfully!')
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2 overflow-hidden">
      {/* LEFT: Set New Password Form */}
      <section className="flex items-center justify-center py-6 px-6 md:px-10 md:py-10 bg-white">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center">
            <img src={logoImage} alt="Logo" className="w-[54px] h-[54px]" />
          </div>
          <h1 className="text-2xl font-semibold text-center mt-6 mb-6">
            Set New password?
          </h1>
          <p className="text-[#667085] text-base text-center">
            Your password should be different from previous passwords.
          </p>

          <form onSubmit={handleSubmit} className="mt-6">
            <div>
              <Label className="block mb-1.5 mt-6" variant="primary">
                Password
              </Label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  required
                  minLength="8"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 pr-11 text-[15px] outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-3 text-soft hover:text-ink/80"
                  aria-label="Show/Hide password"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-[14px] text-soft mt-1">
                Must be at least 8 characters.
              </p>
            </div>

            <div>
              <Label className="block mb-1.5 mt-6" variant="primary">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  minLength="8"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 pr-11 text-[15px] outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-0 px-3 text-soft hover:text-ink/80"
                  aria-label="Show/Hide password"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-brand text-white bg-[#00875A] font-medium rounded-lg py-2.5 hover:bg-brandDark transition shadow-sm mt-6"
            >
              Reset Password
            </button>

            <Link to="/">
              <button
                type="button"
                className="w-full border border-line bg-white text-ink font-medium rounded-lg py-2.5 flex items-center justify-center gap-2 hover:bg-gray-50 transition mt-3"
              >
                Back to Sign in
              </button>
            </Link>
          </form>
        </div>
      </section>

      {/* RIGHT: Image Section */}
      <section className="relative bg-[#F2F4F7] md:block hidden">
        {/* slim divider */}
        <div className="hidden md:block absolute left-0 top-0 h-full w-px bg-black/5"></div>

        <div className="h-full w-full flex items-center justify-end md:pl-10 md:py-10">
          <div className="rounded-tl-[12px] rounded-bl-[12px] shadow-card border-t-4 border-b-4 border-l-4 border-[#101828]">
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

export default SetNewP
