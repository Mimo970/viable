/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = {
  images: {
    domains: ["fakestoreapi.com", "i.dummyjson.com"],
  },
};

// const imageConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         // hostname: "fakestoreapi.com",
//         hostname: "fakestoreapi.com",
//         port: "",
//         pathname: "/cart",
//       },
//     ],
//   },
// };
