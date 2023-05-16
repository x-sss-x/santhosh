import { Meta, Story } from '@storybook/react';
import MedicineDelivery, { MedicineDeliveryProps } from '../components/MedicineDelivery';

const meta: Meta<MedicineDeliveryProps> = {
  title: 'Categories/MedicineDelivery',
  component: MedicineDelivery,
};

export default meta;

export const Default: Story<MedicineDeliveryProps> = (args) => <MedicineDelivery {...args} />;

Default.args = {
  text: 'Medicine delivery service',
};
