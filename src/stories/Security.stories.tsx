import { Meta, Story } from '@storybook/react';
import Security, { SecurityProps } from '../components/Security';

const meta: Meta<SecurityProps> = {
  title: 'Categories/Security',
  component: Security,
};

export default meta;

export const Default: Story<SecurityProps> = (args) => <Security {...args} />;

Default.args = {
  text: 'Security service',
};
