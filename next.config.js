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
          source: "/form",
          destination: "https://checkout.nizen.com.br/form",
        },
        {
          source: "/form-result",
          destination: "https://checkout.nizen.com.br/form-result",
        },
        {
          source: "/slug/:path*",
          destination: "https://checkout.nizen.com.br/slug/:path*",
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
