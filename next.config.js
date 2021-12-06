module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: "/checkout",
          destination: "https://checkout.nizen.com.br/checkout",
        },
        {
          source: "/checkout/:path*",
          destination: "https://checkout.nizen.com.br/checkout/:path*",
        },
      ],
    };
  },
};
