/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  async redirects() {
    return [
      {
        source: "/stats",
        destination: "https://docs.google.com/spreadsheets/d/1oesUid_RwtDdtqiXiMLhMzICpIuqZZP4oaO0MMFb90o/edit?usp=sharing",
        permanent: false,
      },
      {
        source: "/logo",
        destination: "/brand",
        permanent: false,
      },
      {
        source: "/brand/logo",
        destination: "/brand",
        permanent: false,
      },
      {
        source: "/logos",
        destination: "/brand",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
