import { Story } from '@storybook/react';
import Profile from '../components/Profile';

export default {
  title: 'Profile',
  component: Profile,
};

const Template: Story = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'varshitha',
  email: 'varshitha@example.com',
  customerId: '1234567890',
};
