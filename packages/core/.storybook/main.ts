import type { StorybookConfig } from '@storybook/react-vite'
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      // prevent showing undefined
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false
      },
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => true
    }
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Overview'
  }
}
export default config
