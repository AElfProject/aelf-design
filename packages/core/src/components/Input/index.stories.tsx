import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Input from './index'

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded'
  },
  argTypes: {
    size: {
      options: ['small', 'middle'],
      control: { type: 'radio' }
    }
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs']
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof Input>
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
type TextAreaStory = StoryObj<typeof Input.TextArea>
export const TextArea: TextAreaStory = {
  render: (props) => <Input.TextArea {...props} />
}

type PasswordStory = StoryObj<typeof Input.Password>
export const Password: PasswordStory = {
  render: (props) => <Input.Password {...props} />
}
