import { Meta, Story } from '@storybook/react';
import CouponDeals, { CouponDealsProps } from '../components/CouponDeals';

const meta: Meta<CouponDealsProps> = {
  title: 'Categories/CouponDeals',
  component: CouponDeals,
};

export default meta;

export const Default: Story<CouponDealsProps> = (args) => <CouponDeals {...args} />;

Default.args = {
  text: 'Coupon deals service',
};
