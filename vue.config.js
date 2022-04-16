// const autoprefixer = require('autoprefixer');
// const pxtoviewport = require('postcss-px-to-viewport');
//
// module.exports = {
//   outputDir: 'dist/demo',
//   css: {
//     loaderOptions: {
//       postcss: {
//         plugins: [
//           autoprefixer(),
//           pxtoviewport({
//
//             // 配置视窗口尺寸
//             viewportWidth: 1920,
//             viewportHeight:1080,
//             unitPrecision: 2,
//             viewportUnit: 'vw',
//             minPixelValue: 1,
//           })
//         ]
//       }
//     }
//   }
// };
module.exports={
  publicPath:'./',
  	devServer: {
		proxy: {
			'/admin': {
				//代理api
				target: 'http://192.168.1.2:8080', // 代理接口(注意只要域名就够了)
				changeOrigin: true, //是否跨域
				ws: true, // proxy websockets
				pathRewrite: {
					//重写路径
					'^/admin': '' //代理路径
				}
			}
		},
    disableHostCheck: true
    // allowedHosts:"all"
	}
}
