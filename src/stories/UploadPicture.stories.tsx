import { Story, Meta } from '@storybook/react';
import UploadPicture, { UploadPictureProps } from '../components/UploadPicture';

export default {
  title: 'components/UploadPicture',
  component: UploadPicture,
} as Meta;

const Template: Story<UploadPictureProps & { color?: string }> = (args) => <UploadPicture {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "stone-200",
};
