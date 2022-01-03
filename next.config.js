const moduleExports = {
  swcMinify: false,
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
  webpack: (config) => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false };

    return config;
  },
};

module.exports = moduleExports;
