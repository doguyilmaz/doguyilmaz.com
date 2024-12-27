import { Flex, IconButton, SmartLink, Text } from '@/once-ui/components';
import { useTranslations } from 'next-intl';
import styles from './Footer.module.scss';
import { personalConfig, siteConfig } from '@/config';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations();

  const socialLinks = [
    { name: 'GitHub', icon: 'github', link: siteConfig.links.github },
    { name: 'LinkedIn', icon: 'linkedin', link: siteConfig.links.linkedin },
    { name: 'Email', icon: 'mail', link: siteConfig.links.email },
  ];

  return (
    <Flex
      as='footer'
      position='relative'
      fillWidth
      padding='8'
      justifyContent='center'
      mobileDirection='column'
    >
      <Flex
        className={styles.mobile}
        fillWidth
        maxWidth='m'
        paddingY='8'
        paddingX='16'
        gap='16'
        justifyContent='space-between'
        alignItems='center'
      >
        <Text variant='body-default-s' onBackground='neutral-strong'>
          <Text onBackground='neutral-weak'>© {currentYear} /</Text>
          <Text paddingX='4'>{personalConfig.name}</Text>
        </Text>
        <Flex gap='16'>
          {socialLinks.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size='s'
                  variant='ghost'
                />
              )
          )}
        </Flex>
      </Flex>
      <Flex height='80' show='s'></Flex>
    </Flex>
  );
};
