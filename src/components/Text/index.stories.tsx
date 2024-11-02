import type {Meta, StoryObj} from '@storybook/react';
import {Text} from "./index";

const meta: Meta = {
  title: 'Text',
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ['components', 'text', "autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Text",
  }
}