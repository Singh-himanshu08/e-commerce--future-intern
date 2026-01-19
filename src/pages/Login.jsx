import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={onSubmitHandler}
        className="bg-white-300 shadow-lg rounded-sm p-8 w-[90%] border border-gray-400 sm:max-w-96 flex flex-col gap-4 text-gray-800 rounded-tl-2xl rounded-br-2xl"
      >
        <div className="inline-flex items-center gap-2 mb-2 justify-center">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>

        {currentState === 'Login' ? null : (
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Name"
            required
          />
        )}

        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Email"
          required
        />

        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Password"
          required
        />

        <div className="w-full flex justify-between text-sm mt-1">
          <p className="cursor-pointer text-gray-600 hover:text-black">
            Forgot Your Password
          </p>

          {currentState === 'Login' ? (
            <p
              onClick={() => setCurrentState('Sign Up')}
              className="cursor-pointer text-gray-600 hover:text-black"
            >
              Create Account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState('Login')}
              className="cursor-pointer text-gray-600 hover:text-black"
            >
              Login
            </p>
          )}
        </div>

        <button className="bg-black text-white rounded-md font-light px-8 py-2 mt-4 hover:bg-gray-900">
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  )
}

export default Login
