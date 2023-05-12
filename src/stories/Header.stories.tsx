import type { Meta, StoryObj } from '@storybook/react';
import Header from '../components/Header';
import logoIcon from '../../public/Images/Header/Logo.png';

const meta: Meta<typeof Header> = {
  title: 'components/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    logo: logoIcon,
  },
};
