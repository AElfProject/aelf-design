import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import AelfdInput from './index'

const meta = {
  title: 'Example/Input',
  component: AelfdInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof AelfdInput>

export default meta

type Story = StoryObj<typeof AelfdInput>
// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    addonAfter: 'AELF',
    addonBefore: 'ELF'
  },
  parameters: {
    layout: 'padded'
  }
}
type TextAreaStory = StoryObj<typeof AelfdInput.TextArea>
export const TextArea: TextAreaStory = {
  render: () => <AelfdInput.TextArea />
}

type PasswordStory = StoryObj<typeof AelfdInput.Password>
export const Password: PasswordStory = {
  render: () => <AelfdInput.Password />
}
