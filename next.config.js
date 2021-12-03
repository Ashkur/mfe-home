module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: "https://home.nizen.com.br/:path*",
        },
      ],
    };
  },
};
