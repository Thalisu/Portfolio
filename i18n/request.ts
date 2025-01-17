import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  let lng = await requestLocale;
 
  if (!lng || !routing.locales.includes(lng as any)) {
    lng = routing.defaultLocale;
  }
 
  return {
    locale: lng,
    messages: (await import(`../public/locales/${lng}.json`)).default
  };
});