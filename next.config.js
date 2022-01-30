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
      fallback: [
        {
          source: "/cra",
          destination: "https://my-mf.vercel.app",
        },
        {
          source: "/cra/:path*",
          destination: "https://my-mf.vercel.app/:path*",
        },
      ],
    };
  },
};
