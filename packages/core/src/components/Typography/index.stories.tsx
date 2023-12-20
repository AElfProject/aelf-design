import type { Meta, StoryObj } from '@storybook/react'

import Typography from './index'
import { FontWeightType } from './index'
const { Text } = Typography

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Typography',
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof Text>
// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    fontWeight: FontWeightType.Regular,
    size: 'small',
    children: 'Typography text components'
  },
  parameters: {
    layout: 'padded'
  }
}
