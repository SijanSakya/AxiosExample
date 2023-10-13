"use client"
import FormHook from '@/components/Form/FormHook'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const SignupPage = () => {
    const router = useRouter()
  return (
    <div>
        <FormHook title="signup"/>
       
        <button type="button" onClick={() => router.push('/account/login')}>
      Login
    </button>
    </div>
  )
}

export default SignupPage