/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

import { defaultTemplate } from './template'

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
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
              params: {
                optionName: 'optionValue'
              },
              fn: (ast, params, info) => {
                // add special id
                const pathArr = info.path?.split('/')
                const name = `${
                  /^\S+(?=\.svg)/g.exec(pathArr[pathArr.length - 1])[0]
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
    environment: 'happy-dom',
    setupFiles: '.vitest/setup',
    include: ['**/test.{ts,tsx}']
  }
})
