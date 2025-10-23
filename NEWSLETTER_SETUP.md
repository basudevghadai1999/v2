# Newsletter Setup Guide

## Overview
Your portfolio now has a custom newsletter system that:
1. Sends you an email notification at `ghadaibasudev1234@gmail.com` when someone subscribes
2. Sends a welcome email to new subscribers
3. Can be used to send blog post updates to all subscribers

## Setup Instructions

### 1. Sign up for Resend (Email Service)
1. Go to [https://resend.com](https://resend.com)
2. Create a free account (100 emails/day free)
3. Verify your domain or use their test domain
4. Get your API key from the dashboard

### 2. Configure Environment Variables
1. Create a `.env.local` file in your project root
2. Add your Resend API key:
```
RESEND_API_KEY=re_your_actual_api_key_here
```

### 3. Update Email Domain
In `src/app/api/newsletter/subscribe/route.ts`, update the `from` email addresses:
- Change `newsletter@yourdomain.com` to your actual domain
- Or use Resend's test domain: `onboarding@resend.dev`

### 4. Test the Newsletter
1. Start your development server: `npm run dev`
2. Go to your homepage
3. Scroll to the newsletter section
4. Enter a test email and click "Sign up"
5. Check both your email (`ghadaibasudev1234@gmail.com`) and the subscriber's email

## How It Works

### When Someone Subscribes:
1. User enters their email in the newsletter form
2. API endpoint `/api/newsletter/subscribe` is called
3. Two emails are sent:
   - **To you**: Notification with subscriber's email and timestamp
   - **To subscriber**: Welcome message introducing your newsletter

### Sending Blog Posts to Subscribers:
To send new blog posts to subscribers, you'll need to:
1. Store subscriber emails in a database (MongoDB, PostgreSQL, etc.)
2. Create an API endpoint to send blog post emails
3. Call this endpoint when publishing new posts

## Optional: Database Integration

To store subscribers and send blog posts, you can add:

```typescript
// Example: Store subscriber in database
import { MongoClient } from 'mongodb';

async function storeSubscriber(email: string) {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db('newsletter');
    await db.collection('subscribers').insertOne({
        email,
        subscribedAt: new Date(),
        active: true
    });
    await client.close();
}
```

## Alternative: Use Mailchimp
If you prefer Mailchimp:
1. Sign up at [https://mailchimp.com](https://mailchimp.com)
2. Create an audience
3. Get your form action URL
4. Update `src/app/resources/config.js`:
```javascript
const mailchimp = {
    action: 'https://your-mailchimp-url.com/subscribe/post?parameters',
    // ... rest of config
}
```

## Troubleshooting

### Emails not sending?
- Check your Resend API key is correct
- Verify your domain is verified in Resend
- Check the browser console for errors
- Look at server logs for API errors

### Want to customize emails?
Edit the HTML in `src/app/api/newsletter/subscribe/route.ts`

## Next Steps
1. Set up a database to store subscribers
2. Create an admin panel to manage subscribers
3. Build an email template system for blog posts
4. Add unsubscribe functionality
5. Track email open rates and clicks

## Support
For issues or questions, check:
- [Resend Documentation](https://resend.com/docs)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
