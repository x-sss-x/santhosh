import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'examples/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    intent: 'primary',
    fullwidth: true,
    children: 'Primary Label',
  },
  argTypes: {
    fullwidth: {
      type: 'boolean',
      defaultValue: false,
    },
  },
};

export const Green: Story = {
  args: {
    intent: 'green',
    fullwidth: true,
    children: 'Green Label',
  },
  argTypes: {
    fullwidth: {
      type: 'boolean',
      defaultValue: false,
    },
  },
};

export const Red: Story = {
  args: {
    intent: 'red',
    fullwidth: true,
    children: 'Red Label',
  },
  argTypes: {
    fullwidth: {
      type: 'boolean',
      defaultValue: false,
    },
  },
};

