import { Meta, Story } from '@storybook/react';
import TaxiRide, { TaxiRideProps } from '../components/TaxiRide';

const meta: Meta<TaxiRideProps> = {
  title: 'Categories/TaxiRide',
  component: TaxiRide,
};

export default meta;

export const Default: Story<TaxiRideProps> = (args) => <TaxiRide {...args} />;

Default.args = {
  text: 'Taxi Ride',
};
