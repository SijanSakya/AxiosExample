"use client"
import FormHook from '@/components/Form/FormHook'
import React from 'react'
import { useRouter } from 'next/navigation'
const LoginPage = () => {
    const router = useRouter();
  return (
    <div>
        <FormHook title= "login" />
        <button type="button" onClick={() => router.push('/account/signUp')}>
      Register 
    </button>
    </div>
  )
}

export default LoginPage