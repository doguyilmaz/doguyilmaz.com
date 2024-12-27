import mdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'togg-prd-cdn-ebcuc9ayg8fgegc8.z01.azurefd.net',
      },
      {
        protocol: 'https',
        hostname: 'www.trugo.com.tr',
      },
    ],
  },
};

export default withNextIntl(withMDX(nextConfig));
