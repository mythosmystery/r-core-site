const isProd = process.env.NODE_ENV === 'production';

/**
 * @type {import('next').NextConfig}
 **/

module.exports = {
   images: {
      loader: 'imgix',
      path: isProd ? 'https://mythosmystery.github.io/notes-web-frontend' : 'http://localhost:3000',
   },
   assetPrefix: isProd ? '/notes-web-frontend/' : '',
   basePath: isProd ? '/notes-web-frontend' : '',
};
