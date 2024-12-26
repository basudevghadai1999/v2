import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';  // Correct import for getRequestConfig
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  // Check if the locale is available in the params or request context
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;  // Fallback to default locale
  }

  // Ensure the incoming locale is valid, fallback if necessary
  if (!routing.locales.includes(locale as any)) notFound();

  return {
    locale,  // Return the valid locale
    messages: (await import(`../../messages/${locale}.json`)).default,  // Load messages for the valid locale
  };
});
