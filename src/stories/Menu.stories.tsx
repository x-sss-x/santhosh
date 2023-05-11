import React from 'react';
import { Story, Meta } from '@storybook/react';
import Image from 'next/image';
import Menu from '../components/Menu';
import menuIcon from '../../public/Images/Icons/menu.png';

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta;

const Template: Story = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <Image src={menuIcon} alt="Menu" width={24} height={24} />
};
