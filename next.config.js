/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    swcMinify: true
};

module.exports = nextConfig;

module.exports = {
    env: {
        TRAVIANET_LINK: "https://www.travialinks.de/link/A-29963-0/A/trafficsTBE",
    },
};
