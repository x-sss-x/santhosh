import { Meta, Story } from '@storybook/react';
import CourierService, { CourierServiceProps } from '../components/CourierService';

const meta: Meta<CourierServiceProps> = {
  title: 'Categories/CourierService',
  component: CourierService,
};

export default meta;

export const Default: Story<CourierServiceProps> = (args) => <CourierService {...args} />;

Default.args = {
  text: 'Courier service',
};
