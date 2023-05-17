import { Meta, Story } from '@storybook/react';
import LiquorDelivery, { LiquorDeliveryProps } from '../components/LiquorDelivery';

const meta: Meta<LiquorDeliveryProps> = {
  title: 'categories/LiquorDelivery',
  component: LiquorDelivery,
};

export default meta;

export const Default: Story<LiquorDeliveryProps> = (args) => <LiquorDelivery {...args} />;

Default.args = {
  text: 'Liquor delivery service',
};
