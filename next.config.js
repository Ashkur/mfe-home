module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "https://checkout.nizen.com.br/checkout",
      },
    ];
  },
};
