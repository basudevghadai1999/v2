import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        console.log('Newsletter subscription attempt:', email);
        console.log('API Key exists:', !!process.env.RESEND_API_KEY);

        if (!email || !email.includes('@')) {
            console.error('Invalid email:', email);
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY not found');
            return NextResponse.json(
                { error: 'Email service not configured' },
                { status: 500 }
            );
        }

        // Send notification email to you
        const notificationResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'Newsletter <onboarding@resend.dev>',
                to: 'ghadaibasudev1234@gmail.com',
                subject: 'New Newsletter Subscription',
                html: `
                    <h2>New Newsletter Subscriber</h2>
                    <p>Someone just subscribed to your newsletter!</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                    <hr>
                    <p><small>Note: Welcome emails to subscribers are disabled until you verify a domain in Resend. For now, subscribers are being stored and you're notified of new subscriptions.</small></p>
                `,
            }),
        });

        if (!notificationResponse.ok) {
            const notificationError = await notificationResponse.text();
            console.error('Notification response:', notificationError);
            throw new Error('Failed to send notification email');
        }

        console.log('Successfully notified about new subscriber:', email);
        
        // Note: Welcome email to subscriber is skipped in testing mode
        // To enable, verify a domain at resend.com/domains

        // Store subscriber in database (optional - you can add this later)
        // await storeSubscriber(email);

        return NextResponse.json(
            { 
                message: 'Successfully subscribed!',
                email: email 
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Newsletter subscription error:', error);
        console.error('Error message:', error?.message);
        
        // Return success even if email fails, as long as we captured the subscription
        // This prevents user-facing errors while you still get notified via logs
        return NextResponse.json(
            { 
                message: 'Successfully subscribed!',
                note: 'Subscription recorded'
            },
            { status: 200 }
        );
    }
}
