// stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonExtendedProps } from '../components/Button';

export default {
  title: 'components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonExtendedProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  intent: 'disabled',
};

export const Green = Template.bind({});
Green.args = {
  children: 'Green Button',
  intent: 'green',
};

export const Red = Template.bind({});
Red.args = {
  children: 'Red Button',
  intent: 'red',
};


export const Feedback = Template.bind({});
Feedback.args = {
  children: 'Feedback Button',
  intent: 'feedback',
};

