module.exports = {
  publicPath: "./",
  // devServer: {
  // proxy: {
  //配置跨域
  // "/api": {
  //   target: "https://ftestapi.skyids.com:20000",
  //   ws: true,
  //   changOrigin: true,
  //   pathRewrite: {
  //     "^/api": "/",
  //   },
  // },
  // }
  // }
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '人脸识别公共平台'
        return args
      })
  }
  
};