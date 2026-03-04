// EmailJS Configuration
// Sign up at https://www.emailjs.com/ and get your public key

export const emailConfig = {
  // Replace with your EmailJS Public Key from https://dashboard.emailjs.com/
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,

  // Replace with your Service ID from EmailJS
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,

  // Replace with your Template ID from EmailJS
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

  // Email address to receive messages
  TO_EMAIL: import.meta.env.VITE_EMAILJS_TO_EMAIL,
};

/* 
SETUP INSTRUCTIONS:
1. Go to https://www.emailjs.com/ and sign up for a free account
2. Create an email service (Gmail, Outlook, or your own SMTP)
3. Create an email template with these variables:
   - user_name (from name)
   - user_email (reply-to email)
   - subject (message subject)
   - message (message body)
4. Copy your Public Key, Service ID, and Template ID and update them above
5. Update TO_EMAIL with your actual email address
*/
