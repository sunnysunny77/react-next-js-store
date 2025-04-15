
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    quietDeps: true,
    silenceDeprecations: [
      "mixed-decls",
      "import",
      "color-functions",
      "global-builtin",
      "legacy-js-api"
    ],
  },
};

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withPWA = require("@ducanh2912/next-pwa").default({
      dest: "public",
      register: false,
    });
    return withPWA(nextConfig);
  }
  return nextConfig;
};