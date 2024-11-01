import type {Meta, StoryObj } from '@storybook/react';
import Button from "./index";

const meta: Meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ['components', 'button'],
}

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
  }
}