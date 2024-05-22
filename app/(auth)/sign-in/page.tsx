import AuthForm from '@/components/AuthForm'
import React from 'react'

const SignIn = () => {
  return (
    <section className='flex-center size-full max-sm:px6'>
      <AuthForm type='sign-up' />
    </section>
  )
}

export default SignIn