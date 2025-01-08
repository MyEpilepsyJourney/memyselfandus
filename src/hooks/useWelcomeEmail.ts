import { useCallback } from 'react';
import { sendWelcomeEmail } from '../services/emailService';

export function useWelcomeEmail() {
  const sendEmail = useCallback(async (email: string, username: string) => {
    try {
      await sendWelcomeEmail(email, username);
      return true;
    } catch (error) {
      console.error('Welcome email error:', error);
      return false;
    }
  }, []);

  return { sendEmail };
}