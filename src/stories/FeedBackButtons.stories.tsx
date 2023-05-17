import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { ButtonProps } from '../components/FeedBackButtons';

export default {
  title: 'components/feedback/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Click Me',
};
