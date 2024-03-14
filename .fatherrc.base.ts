import { defineConfig } from 'father';

export default defineConfig({
  cjs: {
    output: 'dist/lib',
    transformer: 'babel',
  },
  esm: {
    output: 'dist/esm',
    transformer: 'babel',
  },
  extraBabelPlugins: [
    [
      'babel-plugin-inline-react-svg-v2',
      {
        svgo: {
          plugins: [
            {
              name: 'preset-default',
            },
          ],
        },
        spreadDefaultProps: true,
      },
    ],
  ],
});
