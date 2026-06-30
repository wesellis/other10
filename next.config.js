/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGitHubPages ? '/other10' : '',
  assetPrefix: isGitHubPages ? '/other10/' : '',
};

module.exports = nextConfig;
