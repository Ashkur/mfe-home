module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "https://home.nizen.com.br/",
      },
    ];
  },
};
