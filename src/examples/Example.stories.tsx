import { Meta, StoryObj } from "@storybook/react";
import { Example } from "./Example";

const meta: Meta<typeof Example> = {
  title: "Example/Example",
  component: Example,
  parameters: {
    layout: "centered"
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Example1: Story = {}