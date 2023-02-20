module.exports = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns:[ 
            {
          protocol: 'https',
          hostname: 'cdn.pandascore.co',
          port: '',
          pathname: '/**',
        },
    ],
    },
  }
  