import { IBundleOptions } from 'father-build/src/types';
const config: IBundleOptions = {
  esm: 'babel',
  cjs: 'babel',
  // cssModules: true,
  // runtimeHelpers: true,
  // lessInBabelMode: true,
  // extractCSS: true,
  // extraBabelPlugins: [
  //   ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
  //   ['transform-remove-console', { exclude: ['error', 'warn', 'info'] }],
  //   [
  //     'module-resolver',
  //     {
  //       root: ['.'],
  //       alias: {
  //         '@': './src',
  //         '@@': 'src/.umi',
  //       },
  //     },
  //   ],
  // ],
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  extraPostCSSPlugins: [],
};
export default config;
