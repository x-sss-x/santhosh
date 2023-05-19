import { Story, Meta } from '@storybook/react';
import Profile, { ProfileProps } from '../components/Profile';
import profileImage from '../../public/Images/Profile/profile.png';

export default {
  title: 'components/Profile',
  component: Profile,
} as Meta;

const Template: Story<ProfileProps & { imageSrc: StaticImageData; text: string }> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: profileImage,
  text: 'Santhosh',
  id_no:90,
};
