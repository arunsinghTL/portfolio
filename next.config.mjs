import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
};

const pwaOptions = {
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  buildExcludes: [/middleware-manifest\.json$/, /dynamic-css-manifest\.json$/],
  mode: 'production',
  swSrc: './service-worker.js',  // Custom SW location (root of project),
};

export default withPWA(pwaOptions)(baseConfig);
