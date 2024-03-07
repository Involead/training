'use client'
import Image from "next/image";
import React from 'react'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ValidateEmail } from "@/utils/utils";

const loginForm = {
  'padding': '20px 40px 30px',
  'boxShadow': 'rgb(0 0 0 / 23%) 1px 20px 15px 7px',
  'background': 'radial-gradient(circle, rgb(243 243 243 / 0%) 0%, rgb(191 191 191 / 15%) 100%)',
  'borderRadius': '20px',
}

export const LoginFrom = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter()

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!name.trim() || !ValidateEmail(email)) {
      alert('Please enter a valid name and email.');
      return;
    }
    router.push('/instructions');
  };
  return (
    <>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" style={loginForm} onSubmit={handleSubmit}>
        <div className="mb-1 flex justify-center">
          <Image src="/clogo.png" alt="Logo" width={80} height={80} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="you@example.com"
            required
            value={email} onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  )
}
