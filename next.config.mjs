/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'img.pokemondb.net',
                port: '',
                protocol: 'https',
                pathname: '/sprites/**',
            }
        ],
    },
};

export default nextConfig;