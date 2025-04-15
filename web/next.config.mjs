/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: '', // 设置统一前缀
    assetPrefix: '', // 静态资源前缀
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true, // build时跳过eslint
    },
    env: {
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "da9h8exvs",
        NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "fi0lxkc1",
    },
    images: {
        domains: ['images.unsplash.com'],
    },
};

export default nextConfig;
