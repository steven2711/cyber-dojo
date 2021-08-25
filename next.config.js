module.exports = {
  async redirects() {
    return [
      {
        source: "/business-solutions",
        destination: "/",
        permanent: false,
      },
    ];
  },
};
