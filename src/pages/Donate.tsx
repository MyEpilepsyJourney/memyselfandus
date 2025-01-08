import React, { useState } from 'react';
import PageLayout from '../layouts/PageLayout';
import DonationStats from '../components/donations/DonationStats';
import DonationForm from '../components/donations/DonationForm';
import DonationSuccess from '../components/donations/DonationSuccess';
import DonationAlert from '../components/donations/DonationAlert';
import { useDonations } from '../hooks/useDonations';

export default function Donate() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { showAlert, lastDonation, showDonationAlert, hideAlert } = useDonations();

  const handleDonationSuccess = (amount: string) => {
    setIsSuccess(true);
    showDonationAlert(amount);
  };

  return (
    <PageLayout title="Support Us">
      {showAlert && (
        <DonationAlert 
          amount={lastDonation} 
          onClose={hideAlert}
        />
      )}
      
      {isSuccess ? (
        <DonationSuccess />
      ) : (
        <>
          <DonationStats />
          <p className="text-gray-600 mb-6">
            Your support helps us continue providing valuable resources and support to our community.
            Every contribution makes a difference.
          </p>
          <DonationForm onSuccess={handleDonationSuccess} />
        </>
      )}
    </PageLayout>
  );
}