/** @type {import('next').NextConfig} */
const nextConfig = {
  // async redirects() {

  //   return [
  //     {
  //       source: '/beer',
  //       has: [
  //         {
  //           type: 'host',
  //           value: 'beer.kryptopia.io',
  //         },
  //       ],
  //       destination: '/beer.js', // Ruta a la página /beer que deseas redireccionar
  //       permanent: true, // Cambia a "false" si deseas una redirección temporal (302)
  //     },
  //   ];
  // },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: [''],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '',
        port: '',
        pathname: '/metadata/image/**',
      },
    ],
  },
  compiler: {
    styledComponents: true
  },
  output: 'standalone',
  // basePath: '/nextjs-ui',
}

module.exports = nextConfig

