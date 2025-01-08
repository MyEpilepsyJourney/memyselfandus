import React, { useState } from 'react';
import { CreditCard, Wallet } from 'lucide-react';

interface DonationFormProps {
  onSuccess: () => void;
}

export default function DonationForm({ onSuccess }: DonationFormProps) {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = amount === 'other' ? customAmount : amount;
    if (!finalAmount || isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Here you would integrate with your payment processor
      await new Promise(resolve => setTimeout(resolve, 1500));
      onSuccess();
    } finally {
      setIsSubmitting(false);
    }
  };

  const donationAmounts = [
    { value: '5', label: '£5' },
    { value: '10', label: '£10' },
    { value: '20', label: '£20' },
    { value: 'other', label: 'Other' }
  ];

  const handleAmountSelect = (value: string) => {
    setAmount(value);
    if (value !== 'other') {
      setCustomAmount('');
    }
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
  };

  const getFinalAmount = () => {
    if (amount === 'other' && customAmount) {
      return `£${customAmount}`;
    }
    return amount ? `£${amount}` : '';
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Select Amount
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {donationAmounts.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => handleAmountSelect(value)}
                className={`
                  py-3 rounded-lg text-lg font-medium transition-all duration-200
                  ${amount === value
                    ? 'bg-indigo-600 text-white ring-2 ring-indigo-600 ring-offset-2'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {label}
              </button>
            ))}
          </div>

          {amount === 'other' && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                <input
                  type="text"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="Enter amount"
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Method
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setPaymentMethod('card')}
              className={`
                flex items-center justify-center space-x-2 p-3 rounded-lg
                ${paymentMethod === 'card'
                  ? 'bg-indigo-100 text-indigo-700 ring-2 ring-indigo-600 ring-offset-2'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              <CreditCard className="w-5 h-5" />
              <span>Card</span>
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod('paypal')}
              className={`
                flex items-center justify-center space-x-2 p-3 rounded-lg
                ${paymentMethod === 'paypal'
                  ? 'bg-indigo-100 text-indigo-700 ring-2 ring-indigo-600 ring-offset-2'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              <Wallet className="w-5 h-5" />
              <span>PayPal</span>
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={!getFinalAmount() || isSubmitting}
          className={`
            w-full py-3 rounded-lg text-white font-medium text-lg transition-all duration-200
            ${getFinalAmount() && !isSubmitting
              ? 'bg-indigo-600 hover:bg-indigo-700 transform hover:scale-105'
              : 'bg-gray-300 cursor-not-allowed'
            }
          `}
        >
          {isSubmitting ? 'Processing...' : `Donate ${getFinalAmount()}`}
        </button>
      </div>
    </form>
  );
}