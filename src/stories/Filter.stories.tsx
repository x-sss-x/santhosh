import type { Meta, StoryObj } from '@storybook/react';
import Filter, { FilterProps } from '../components/Filter';

const meta: Meta<typeof Filter> = {
  title: 'Examples/Filter',
  component: Filter,
};

export default meta;

type Story = StoryObj<typeof Filter>;

export const Default: Story = {
  args: {},
};
