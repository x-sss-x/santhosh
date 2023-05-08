import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from '../app/Toggles/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
  },
} as Meta;

const Template: Story<{ children: React.ReactNode }> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
};
