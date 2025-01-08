import React, { useState } from 'react';
import SignUpForm from '../components/auth/SignUpForm';
import CelebrationOverlay from '../components/auth/CelebrationOverlay';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [showCelebration, setShowCelebration] = useState(false);
  const navigate = useNavigate();

  const handleSignUpSuccess = () => {
    setShowCelebration(true);
  };

  const handleCelebrationComplete = () => {
    setShowCelebration(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
          ME MYSELF & Us<span className="text-sm align-super">™</span>
        </h1>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SignUpForm onSuccess={handleSignUpSuccess} />
        </div>
      </div>

      {showCelebration && (
        <CelebrationOverlay onComplete={handleCelebrationComplete} />
      )}
    </div>
  );
}