import type { Meta, StoryObj } from '@storybook/react'
import AelfdButton from './index'

const meta = {
  title: 'Example/Button',
  component: AelfdButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded'
  },
  argTypes: {
    shape: {
      options: ['default', 'circle', 'round'],
      control: { type: 'radio' }
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof AelfdButton>

export default meta

type Story = StoryObj<typeof AelfdButton>
// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'buttonText'
  },
  parameters: {
    layout: 'padded'
  }
}
