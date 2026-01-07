# EmailJS Setup Guide

This portfolio uses EmailJS to handle contact form submissions.

## Quick Setup (3 minutes)

### 1. Create an EmailJS Account
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up for a free account (no credit card needed)

### 2. Add an Email Service
1. Click "Add New Service"
2. Choose your email provider (Gmail, Outlook, etc.)
3. Follow the connection steps
4. Copy your **Service ID**

### 3. Create an Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use these template variables in your email content:
   ```
   From: {{from_name}}
   Reply to: {{reply_to}}
   Subject: {{subject}}
   Message: {{message}}
   Sent at: {{time}}
   ```
4. Example template:
   ```
   New message from your portfolio!
   
   Name: {{from_name}}
   Email: {{reply_to}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   Sent at: {{time}}
   ```
5. Copy your **Template ID**

### 4. Get Your Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### 5. Configure Your Portfolio
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add your credentials to `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

3. Restart your dev server:
   ```bash
   npm run dev
   ```

## Testing

1. Fill out the contact form on your portfolio
2. Click "Send Message"
3. Check your email inbox
4. You should receive the message!

## Free Tier Limits

- 200 emails/month
- No credit card required
- Perfect for personal portfolios

## Troubleshooting

**Form not sending?**
- Check browser console for errors
- Verify all 3 environment variables are set
- Make sure template variable names match exactly
- Restart dev server after changing `.env`

**Not receiving emails?**
- Check your spam folder
- Verify email service is connected in EmailJS dashboard
- Test the template in EmailJS dashboard directly

## Security Notes

- Never commit your `.env` file to Git (it's in `.gitignore`)
- The public key is safe to expose in client-side code
- Service ID and Template ID are also safe to expose
