/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'
import pkg from './package.json'
import commonjs from '@rollup/plugin-commonjs'
import rollupResolve from '@rollup/plugin-node-resolve'
import dts from 'vite-plugin-dts'

import { defaultTemplate } from './template'

// https://vitejs.dev/config
export default defineConfig({
  build: {
    // emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/components/index.tsx')
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'antd-mobile'],
      output: [
        {
          dir: resolve(__dirname, 'dist/umd'),
          format: 'umd',
          name: pkg.name,
          sourcemap: true,
          globals: {
            react: 'react',
            'react-dom': 'react-dom',
            'antd-mobile': 'antd-mobile'
          }
        },
        {
          dir: resolve(__dirname, 'dist/es'),
          format: 'es',
          sourcemap: true
        },
        {
          dir: resolve(__dirname, 'dist/cjs'),
          format: 'cjs',
          sourcemap: true
        }
      ]
    }
  },
  plugins: [
    commonjs(),
    react(),
    tsconfigPaths(),
    dts({
      entryRoot: './src/components',
      outDir: ['./dist/es', './dist/cjs', './dist/umd']
    }),
    rollupResolve(),
    svgr({
      svgrOptions: {
        // if want to use svgoConfig, you need these two plugins first
        // but there is no mention of needing to add a plugin in document
        // https://github.com/pd4d10/vite-plugin-svgr/issues/99
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          plugins: [
            {
              name: 'customPluginName',
              fn: (_, __, info) => {
                // add special id
                const pathArr = info.path?.split('/') || []
                const name = `${
                  (/^\S+(?=\.svg)/g.exec(pathArr[pathArr.length - 1]) || [])[0]
                }_svg_plugin_`
                return {
                  element: {
                    enter: (node, parentNode) => {
                      if (node.name === 'svg' && parentNode.type === 'root') {
                        node.attributes.id =
                          name + Math.floor(Math.random() * 100000)
                      }
                    }
                  }
                }
              }
            }
          ]
        },
        template: defaultTemplate
      }
    })
  ],
  test: {
    globals: true,
    setupFiles: '.vitest/setup',
    include: ['**/test.{ts,tsx}']
  }
})
