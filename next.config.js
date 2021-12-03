module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/checkout",
        destination: "https://checkout.nizen.com.br/checkout",
      },
    ];
  },
};
