const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API: process.env.BASE_API_URL,
  },

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/dashboard",
      },
    ];
  },
};

module.exports = nextConfig;