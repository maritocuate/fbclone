import { signIn } from 'next-auth/react'
import React from 'react'

function Login() {
  return (
      <div className='flex justify-center'>
        <h1
            className='bg-blue-500 text-white cursor-pointer rounded-full p-3 hover:bg-blue-600'
            onClick={ signIn }>
            Login with Facebook
        </h1>
      </div>
  )
}

export default Login