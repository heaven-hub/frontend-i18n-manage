const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'), // 設置 `@` 別名
        },
        css: {
            preprocessorOptions: {
              scss: {
                silenceDeprecations: ['legacy-js-api', 'color-functions'],
              },
            },
          },
    },
};