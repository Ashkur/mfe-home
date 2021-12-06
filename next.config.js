module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: "/checkout/:path*",
          destination: "https://checkout.nizen.com.br/checkout/:path*",
        },
      ],
    };
  },
};
