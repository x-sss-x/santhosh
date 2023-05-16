import { Meta, Story } from '@storybook/react';
import FoodDelivery, { FoodDeliveryProps } from '../components/FoodDelivery';

const meta: Meta<FoodDeliveryProps> = {
  title: 'Categories/FoodDelivery',
  component: FoodDelivery,
};

export default meta;

export const Default: Story<FoodDeliveryProps> = (args) => <FoodDelivery {...args} />;

Default.args = {
  text: 'Food delivery service',
};
