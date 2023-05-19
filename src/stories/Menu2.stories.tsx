import React from 'react';
import { Story, Meta } from '@storybook/react';

import Menu from '../components/Menu2';

export default {
  title: 'Components/Menu2',
  component: Menu,
} as Meta;

const Template: Story = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {};
