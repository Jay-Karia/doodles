import type {Meta, StoryObj } from '@storybook/react';
import Button from "./index";

const meta: Meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ['components', 'button', "autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
  }
}

export const Solid: Story = {
  args: {
    children: "Solid",
    variant: "solid",
  }
}

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  }
}

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  }
}