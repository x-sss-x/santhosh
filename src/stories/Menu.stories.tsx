import { Story } from '@storybook/react';
import Menu from '../components/Menu';

export default {
  title: 'components/Menu',
  component: Menu,
};

const Template: Story = () => <Menu />;

export const Default = Template.bind({});
