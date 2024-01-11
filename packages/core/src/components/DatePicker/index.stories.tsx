import type { Meta, StoryObj } from '@storybook/react'
import { DatePickerForPC as DatePicker } from './index'

const meta = {
  title: 'Example/DatePicker',
  component: DatePicker,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof DatePicker>
// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  parameters: {
    layout: 'padded'
  }
}
