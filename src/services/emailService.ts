import { welcomeEmailTemplate } from '../utils/emailTemplates';

export async function sendWelcomeEmail(email: string, username: string) {
  try {
    const template = welcomeEmailTemplate(username);
    
    // In a real app, you would integrate with an email service like SendGrid
    // This is a mock implementation
    console.log('Sending welcome email to:', email);
    console.log('Subject:', template.subject);
    console.log('Body:', template.body);
    
    return true;
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    throw error;
  }
}