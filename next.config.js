module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: "/checkout",
          destination: "https://checkout.nizen.com.br",
        },
        {
          source: "/checkout/form",
          destination: "https://checkout.nizen.com.br/form",
        },
        {
          source: "/checkout/form-result",
          destination: "https://checkout.nizen.com.br/form-result",
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
