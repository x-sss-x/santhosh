import { Meta, Story } from '@storybook/react';
import HomeCleaning, { HomeCleaningProps } from '../components/HomeCleaning';

const meta: Meta<HomeCleaningProps> = {
  title: 'Categories/HomeCleaning',
  component: HomeCleaning,
};

export default meta;

export const Default: Story<HomeCleaningProps> = (args) => <HomeCleaning {...args} />;

Default.args = {
  text: 'Home cleaning service',
};
