import React from 'react';
import { Story } from '@storybook/react';
import PastServiceHistory, { PastServiceHistoryProps } from '../components/PastServiceHistory';

export default {
  title: 'Components/PastServiceHistory',
  component: PastServiceHistory,
};

const Template: Story<PastServiceHistoryProps> = (args) => <PastServiceHistory {...args} />;

export const Default = Template.bind({});
Default.args = {
  taxiRide: 'TAXI RIDE',
  rideCode: '46OS02',
  time: '4:30PM',
  cost: 'RS 850',
};
