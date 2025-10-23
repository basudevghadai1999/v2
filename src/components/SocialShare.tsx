'use client';

import { Button, Flex } from '@/once-ui/components';
import { useState } from 'react';

interface SocialShareProps {
    url: string;
    title: string;
    description?: string;
}

export function SocialShare({ url, title, description }: SocialShareProps) {
    const [copied, setCopied] = useState(false);

    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = description ? encodeURIComponent(description) : '';

    const shareLinks = {
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleShare = (platform: keyof typeof shareLinks) => {
        window.open(shareLinks[platform], '_blank', 'width=600,height=400');
    };

    return (
        <Flex
            gap="8"
            wrap
            paddingY="m"
            border="neutral-medium"
            borderStyle="solid-1"
            radius="m"
            padding="m">
            <Button
                size="s"
                variant="secondary"
                onClick={() => handleShare('linkedin')}
                prefixIcon="linkedin">
                LinkedIn
            </Button>
            <Button
                size="s"
                variant="secondary"
                onClick={() => handleShare('twitter')}
                prefixIcon="twitter">
                Twitter
            </Button>
            <Button
                size="s"
                variant="secondary"
                onClick={() => handleShare('facebook')}
                prefixIcon="facebook">
                Facebook
            </Button>
            <Button
                size="s"
                variant="secondary"
                onClick={handleCopyLink}
                prefixIcon={copied ? 'check' : 'link'}>
                {copied ? 'Copied!' : 'Copy Link'}
            </Button>
        </Flex>
    );
}
