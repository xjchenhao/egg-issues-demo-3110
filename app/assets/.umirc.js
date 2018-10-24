
// ref: https://umijs.org/config/
export default {
  outputPath: '../public/pages',
  "manifest": {
    "fileName": "../../../config/manifest.json"
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
