const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, './src/app.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/public' 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader']
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './src/template.html')
    })
  ],
  devServer: {
    host: 'localhost',  // 我们可以允许我们用任意方式进行访问（127.0.0.1，localhost, 本机ip）
    port: '8080',
    inline: true,
    // contentBase: path.join(__dirname, '../dist'),
    // hot: true,  //启动热加载
    overlay: {  // 错误提醒弹窗小遮层
      errors: true //只显示error
    },
    // 和output配置对应起来
    publicPath: '/public',  // 访问所有静态路径都要前面加/public才能访问生成的静态文件
    historyApiFallback: {
      index: '/public/index.html' // 所有404的请求全部访问该配置下的url
    }
  }
}