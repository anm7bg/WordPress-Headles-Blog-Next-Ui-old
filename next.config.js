/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "i0.wp.com",
          },
          {
            protocol: "https",
            hostname: "i.postimg.cc",
          },
        ],
      },
}

module.exports = nextConfig