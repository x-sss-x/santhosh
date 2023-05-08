import type { Meta, StoryObj } from "@storybook/react";
import Search from "../components/Search";

const meta: Meta<typeof Search> = {
  title: "examples/Search",
  component: Search,
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {
    placeholder: "Search...",
  },
};

export const AnotherVariant: Story = {
  args: {
    placeholder: "Name",
    inputVariant: "another",
  },
};
