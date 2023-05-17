import { Story, Meta } from '@storybook/react';
import EditProfile from '../components/EditProfile';

export default {
  title: 'pages/Editprofile/Edit Profile',
  component: EditProfile,
} as Meta;

const Template: Story = () => <EditProfile />;

export const Default = Template.bind({});
