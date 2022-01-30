module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: "/",
          destination: "https://checkout.nizen.com.br",
        },
        {
          source: "/checkout/:path*",
          destination: "https://checkout.nizen.com.br/:path*",
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
