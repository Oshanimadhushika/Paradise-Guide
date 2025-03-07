/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   disableStaticImages: false,
  // },
  images: {
    domains: ['firebasestorage.googleapis.com',"img.traveltriangle.com"], 
  },
  transpilePackages: ['antd', '@ant-design', 'rc-util', 'rc-pagination', 'rc-picker'],
}

module.exports = nextConfig 