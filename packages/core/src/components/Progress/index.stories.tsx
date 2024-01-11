import type { Meta, StoryObj } from '@storybook/react'
import Progress from './index'

const meta = {
  title: 'Example/Button',
  component: Progress,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof Progress>

export default meta

type Story = StoryObj<typeof Progress>
// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  parameters: {
    layout: 'padded'
  }
}
