import { Meta, Story } from '@storybook/react';
import BikeRide, { BikeRideProps } from '../components/BikeRide';

const meta: Meta<BikeRideProps> = {
  title: 'Categories/BikeRide',
  component: BikeRide,
};

export default meta;

export const Default: Story<BikeRideProps> = (args) => <BikeRide {...args} />;

Default.args = {
  text: 'bike ride',
};
