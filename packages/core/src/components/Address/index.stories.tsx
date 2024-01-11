import type { Meta, StoryObj } from '@storybook/react'
import Address from './index'

const meta = {
  title: 'Example/Address',
  component: Address,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof Address>

export default meta

type Story = StoryObj<typeof Address>
// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    address: 'iCQmBkK5m4FC6DMjkMGAx4q3niWfvTN6DqWgU7BYSGCRMAdDr'
  },
  parameters: {
    layout: 'padded'
  }
}
