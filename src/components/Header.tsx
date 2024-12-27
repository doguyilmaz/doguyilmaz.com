'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { Flex, ToggleButton } from '@/once-ui/components';
import styles from '@/components/Header.module.scss';
import { routing } from '@/i18n/routing';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config';

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = 'en-GB' }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export const Header = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname() ?? '';
  const params = useParams();

  function handleLanguageChange(locale: string) {
    const nextLocale = locale as Locale;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  const t = useTranslations();

  return (
    <>
      <Flex
        className={styles.mask}
        position='fixed'
        zIndex={9}
        fillWidth
        minHeight='80'
        justifyContent='center'
      />
      <Flex
        style={{ height: 'fit-content' }}
        className={styles.position}
        as='header'
        zIndex={9}
        fillWidth
        padding='8'
        justifyContent='center'
      >
        <Flex paddingLeft='12' fillWidth alignItems='center' textVariant='body-default-s'>
          {/* <Flex hide='s'>{t('location')}</Flex> */}
        </Flex>
        <Flex fillWidth justifyContent='center'>
          <Flex
            background='surface'
            border='neutral-medium'
            borderStyle='solid-1'
            radius='m-4'
            shadow='l'
            padding='4'
            justifyContent='center'
          >
            <Flex gap='4' textVariant='body-default-s'>
              {siteConfig.navigation.map((item, index) => (
                <ToggleButton
                  key={index}
                  prefixIcon={getIconForPath(item.path)}
                  href={`/${params?.locale}${item.path}`}
                  selected={item.path === '/' ? pathname === '/' : pathname.startsWith(item.path)}
                >
                  <Flex paddingX='2' hide='s'>
                    {t(item.name.toLowerCase())}
                  </Flex>
                </ToggleButton>
              ))}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth justifyContent='flex-end' alignItems='center'>
          <Flex
            paddingRight='12'
            justifyContent='flex-end'
            alignItems='center'
            textVariant='body-default-s'
            gap='20'
          >
            {routing.locales.length > 1 && (
              <Flex
                background='surface'
                border='neutral-medium'
                borderStyle='solid-1'
                radius='m-4'
                shadow='l'
                padding='4'
                gap='2'
                justifyContent='center'
              >
                {routing.locales.map((locale, index) => (
                  <ToggleButton
                    key={index}
                    selected={params?.locale === locale}
                    onClick={() => handleLanguageChange(locale)}
                    className={isPending ? 'pointer-events-none opacity-60' : ''}
                  >
                    {locale.toUpperCase()}
                  </ToggleButton>
                ))}
              </Flex>
            )}
            <Flex hide='s'>
              <TimeDisplay timeZone='Europe/Istanbul' />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

function getIconForPath(path: string): string {
  switch (path) {
    case '/':
      return 'home';
    case '/about':
      return 'person';
    case '/work':
      return 'grid';
    case '/blog':
      return 'book';
    case '/gallery':
      return 'gallery';
    case '/contact':
      return 'mail';
    default:
      return 'link';
  }
}
