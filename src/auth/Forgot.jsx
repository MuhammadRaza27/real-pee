import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import simpleIcon from '../assets/simple icon.svg'
import bgImage from '../assets/bg-image.svg'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Label } from '../components/ui/label'


const Forgot = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle forgot password logic here
    console.log('Reset password for:', email)
    alert('Reset instructions sent to your email!')
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* LEFT: Forgot Password Form */}
      <section className="flex items-center justify-center py-6 px-6 md:px-10 bg-white">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center w-[54] h-[54]">
            <img src={simpleIcon} alt="Logo" />
          </div>
          <h1 className="text-2xl text-[#101828] font-bold text-center mt-6 mb-2">
            Forgot password?
          </h1>
          <p className="text-[#667085] text-base text-center">
            No worries, we'll send you reset instructions.
          </p>

          <form onSubmit={handleSubmit} className="mt-6">
            <div>
              <Label className="block mb-1.5">
                Email
              </Label>
              <Input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-[15px] 
                outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-brand text-white font-medium rounded-lg py-2.5 bg-[#00875A] hover:bg-brandDark transition shadow-sm mt-6"
            >
             <Link to="/setnewpassword"> Reset Password</Link>
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

export default Forgot
