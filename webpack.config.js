const path = require('path');
const TenserParser = require('terser-webpack-plugin')
module.exports = {
  entry: {
    'large-number': './src/index.js',
    'large-number.min': './src/index.js',
  },
  output: {
    filename: '[name].js',
    library: 'largeNumber', // 库的名字
    libraryTarget: 'umd', // 库所支持的引用方式，使用umd,说明库支持 amd,cjs,import 等方式引入
    libraryExport: 'default',
  },
  mode: 'none', // 设置为none 是为了只压缩min.js，如果设置为production，则不会无区别压缩
  optimization: {
    minimize: true,
    minimizer: [
        new TenserParser({
            include: /\.min\.js$/  // 匹配 min.js，就只会对min.js压缩
        })
    ]
  }
};