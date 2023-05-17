import { Meta, Story } from '@storybook/react';
import DogWalking, { DogWalkingProps } from '../components/DogWalking';

const meta: Meta<DogWalkingProps> = {
  title: 'Categories/DogWalking',
  component: DogWalking,
};

export default meta;

export const Default: Story<DogWalkingProps> = (args) => <DogWalking {...args} />;

Default.args = {
  text: 'Dog walking service',
};
