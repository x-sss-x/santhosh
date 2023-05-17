import { Meta, Story } from '@storybook/react';
import ServiceCategories from '../components/Categories';

const meta: Meta = {
  title: 'components/ServiceCategories',
  component: ServiceCategories,
};

export default meta;

const Template: Story = (args) => <ServiceCategories {...args} />;

export const Default = Template.bind({});
Default.args = {};
