import React, { useState } from 'react';
import SignInForm from '../components/auth/SignInForm';
import SignUpForm from '../components/auth/SignUpForm';
import Logo from '../components/Logo';

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Logo size="lg" className="mb-8" />
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          {isSignUp ? 'Create your account' : 'Sign in to your account'}
        </h2>
        <p className="text-gray-600 max-w-sm mx-auto">
          {isSignUp 
            ? 'Join our supportive community today'
            : 'Welcome back! Please enter your details'}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          {isSignUp ? <SignUpForm /> : <SignInForm />}
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="mt-4 w-full text-center text-sm text-indigo-600 hover:text-indigo-500 font-medium"
            >
              {isSignUp ? 'Sign in instead' : 'Create an account'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}