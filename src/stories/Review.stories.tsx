import type { Meta, StoryObj } from '@storybook/react';
import Review from '../components/Review';
import reviewIcon from '../../public/Images/Review/review-profile.png';

const meta: Meta<typeof Review> = {
  title: 'components/Review',
  component: Review,
};

export default meta;

type Story = StoryObj<typeof Review>;

export const Default: Story = {
  args: {
    icon: reviewIcon,
    date: "May 12, 2023",
    rating: 5,
    reviewText: "This is a sample review text.",
    name:"Santhosh",
    id:"234"
  },
};
