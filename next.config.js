module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: "/",
          destination: "https://checkout.nizen.com.br/checkout",
        },
        {
          source: "/checkout/:path*",
          destination: "https://checkout.nizen.com.br/checkout/:path*",
        },
        {
          source: "/cra",
          destination: "https://cra.nizen.com.br/cra",
        },
        {
          source: "/cra/:path*",
          destination: "https://cra.nizen.com.br/cra/:path*",
        },
      ],
    };
  },
};
