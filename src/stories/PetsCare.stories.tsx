import { Meta, Story } from '@storybook/react';
import PetsCare, { PetsCareProps } from '../components/PetsCare';

const meta: Meta<PetsCareProps> = {
  title: 'Categories/PetsCare',
  component: PetsCare,
};

export default meta;

export const Default: Story<PetsCareProps> = (args) => <PetsCare {...args} />;

Default.args = {
  text: 'Pets care',
};
