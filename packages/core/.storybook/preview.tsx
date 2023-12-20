import type { Preview } from '@storybook/react'
import React from 'react'
import ConfigProvider from '../src/provider'
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      toc: true // 👈 Enables the table of contents
    },
    backgrounds: {
      default: '#FFF',
      values: [
        {
          name: 'light',
          value: '#FFF'
        },
        {
          name: 'dark',
          value: '#1A1A1A'
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story, context) => {
      const {
        globals
      } = context
      const value = globals?.backgrounds?.value
      return (
        <ConfigProvider appearance={value === '#1A1A1A' ? 'dark' : 'light'}>
          <Story />
        </ConfigProvider>
      )
    }
  ]
}

export default preview
