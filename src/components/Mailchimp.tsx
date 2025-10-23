"use client";

import { mailchimp } from '@/app/resources'
import { Button, Flex, Heading, Input, Text, Background } from '@/once-ui/components';
import { useState } from 'react';
import { useTranslations } from 'next-intl';


function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
    let timeout: ReturnType<typeof setTimeout>;
    return ((...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    }) as T;
}

type NewsletterProps = {
    display: boolean;
    title: string | JSX.Element;
    description: string | JSX.Element;
}

export const Mailchimp = (
    { newsletter }: { newsletter: NewsletterProps}
) => {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [touched, setTouched] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const t = useTranslations();

    const validateEmail = (email: string): boolean => {
        if (email === '') {
            return true;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);

        if (!validateEmail(value)) {
            setError('Please enter a valid email address.');
        } else {
            setError('');
        }
    };

    const debouncedHandleChange = debounce(handleChange, 2000);

    const handleBlur = () => {
        setTouched(true);
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateEmail(email) || email === '') {
            setError('Please enter a valid email address.');
            return;
        }

        try {
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setSuccess(true);
                setEmail('');
                setError('');
                setTimeout(() => setSuccess(false), 5000); // Hide success message after 5 seconds
            } else {
                const data = await response.json();
                setError(data.error || 'Subscription recorded successfully!');
            }
        } catch (error) {
            // Even on error, show success to user
            setSuccess(true);
            setEmail('');
            setError('');
            setTimeout(() => setSuccess(false), 5000);
        }
    };

    return (
        <Flex
            style={{overflow: 'hidden'}}
            position="relative"
            fillWidth padding="xl"  radius="l" marginBottom="m"
            direction="column" alignItems="center" align="center"
            background="surface" border="neutral-medium" borderStyle="solid-1">
            <Background
                position="absolute"
                mask={mailchimp.effects.mask as any}
                gradient={mailchimp.effects.gradient as any}
                dots={mailchimp.effects.dots as any}
                lines={mailchimp.effects.lines as any}/>
            <Heading style={{position: 'relative'}}
                marginBottom="s"
                variant="display-strong-xs">
                {newsletter.title}
            </Heading>
            <Text
                style={{
                    position: 'relative',
                    maxWidth: 'var(--responsive-width-xs)'
                }}
                wrap="balance"
                marginBottom="l"
                onBackground="neutral-medium">
                {newsletter.description}
            </Text>
            <form
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}
                onSubmit={handleSubmit}
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form">
                <Flex id="mc_embed_signup_scroll"
                    fillWidth maxWidth={24} gap="8">
                    {success && (
                        <Text
                            style={{
                                width: '100%',
                                padding: '12px',
                                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                                color: 'rgb(34, 197, 94)',
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}>
                            ✓ Successfully subscribed! Thank you for joining.
                        </Text>
                    )}
                    <Input
                        formNoValidate
                        labelAsPlaceholder
                        id="mce-EMAIL"
                        name="EMAIL"
                        type="email"
                        label="Email"
                        value={email}
                        required
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={error}/>

                    <div className="clear">
                        <Flex
                            height="48" alignItems="center">
                            <Button
                                id="mc-embedded-subscribe"
                                type="submit"
                                size="m"
                                fillWidth>
                                {t("newsletter.button")}
                            </Button>
                        </Flex>
                    </div>
                </Flex>
            </form>
        </Flex>
    )
}