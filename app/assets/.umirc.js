
// ref: https://umijs.org/config/
export default {
  hash: true,
  outputPath: '../public',
  "manifest": {
    "fileName": "../../config/manifest.json",
    publicPath: '',
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'assets',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
}
