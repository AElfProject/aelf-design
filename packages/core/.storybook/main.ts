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
      shouldExtractLiteralValuesFromEnum: true,
      // 👇 Default prop filter, which excludes props from node_modules
      propFilter: (prop) => {
        const regexString =
          '(?:\\/node_modules\\/(?:rc(?:-[^\\/]+)?|antd)|\\/src\\/components)\\/'
        const regex = new RegExp(regexString)
        return prop.parent ? regex.test(prop.parent.fileName) : true
      }
    }
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Overview'
  }
}
export default config
