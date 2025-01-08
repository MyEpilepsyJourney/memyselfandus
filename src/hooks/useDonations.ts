import { useState } from 'react';

export function useDonations() {
  const [showAlert, setShowAlert] = useState(false);
  const [lastDonation, setLastDonation] = useState('');

  const showDonationAlert = (amount: string) => {
    setLastDonation(amount);
    setShowAlert(true);
  };

  return {
    showAlert,
    lastDonation,
    showDonationAlert,
    hideAlert: () => setShowAlert(false)
  };
}