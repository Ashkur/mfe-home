module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://home.nizen.com.br/:path*",
      },
    ];
  },
};
