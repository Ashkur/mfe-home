module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/:path*",
      },
      {
        source: "/checkout/:path*",
        destination: "https://checkout.nizen.com.br/checkout/:path*",
      },
    ];
  },
};
