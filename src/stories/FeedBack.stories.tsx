import { Meta, Story } from '@storybook/react';
import FeedBack1 from '../components/FeedBack1';

const meta: Meta = {
  title: 'Pages/FeedBack/FeedBack1',
  component: FeedBack1,
};

export default meta;

const Template: Story = (args) => <FeedBack1 {...args} />;

export const Default = Template.bind({});
Default.args = {};
