/** @type {import('next').NextConfig} */

module.exports = {
  
  nextConfig : {
    reactStrictMode: false,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
    
  }
}
const withImages = require('next-images')
module.exports = withImages()
