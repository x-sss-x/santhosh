import { Meta, Story } from '@storybook/react';
import WaterDelivery, { WaterDeliveryProps } from '../components/WaterDelivery';

const meta: Meta<WaterDeliveryProps> = {
  title: 'Categories/WaterDelivery',
  component: WaterDelivery,
};

export default meta;

export const Default: Story<WaterDeliveryProps> = (args) => <WaterDelivery {...args} />;

Default.args = {
  text: 'Water delivery service',
};
