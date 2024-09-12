'use client'

import { useState } from 'react'
import { BackgroundBeams } from "./ui/background-beams"
import { Button } from "./ui/button"
import { Input } from './ui/input'
import { motion } from "framer-motion"

export function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle email submission logic here
    console.log('Submitted email:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <motion.h1 
          className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-zinc-200 to-zinc-600 dark:from-zinc-200 dark:to-zinc-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Elevate Your Resume with AI
        </motion.h1>
        <motion.p 
          className="text-zinc-700 dark:text-zinc-300 max-w-lg mx-auto my-2 text-sm sm:text-base text-center relative z-10 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Craft a standout resume with ease using the power of AI. Receive tailored suggestions, optimize your content for specific job roles, and ensure your resume perfectly aligns with job descriptions—designed to accelerate your path to landing your dream job.
        </motion.p>
        <motion.form 
          onSubmit={handleSubmit}
          className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-64 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 border-zinc-300 dark:border-zinc-700 focus:border-zinc-500 dark:focus:border-zinc-500 focus:ring-zinc-500 dark:focus:ring-zinc-500"
            required
          />
          <Button type="submit" className="w-full sm:w-auto bg-zinc-800 text-zinc-100 hover:bg-zinc-700 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300">
            Join Waitlist
          </Button>
        </motion.form>
      </div>
      <BackgroundBeams />
    </div>
  )
}