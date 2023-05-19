import { Story } from "@storybook/react";
import Star, { StarProps } from "../components/Star";
import emptyStar from "../../public/Images/Review/star-empty.png";
import fullStar from "../../public/Images/Review/star-filled.png";
import halfStar from "../../public/Images/Review/star-half-filled.png";

export default {
  title: "Components/Star",
  component: Star,
};

const Template: Story<StarProps> = (args) => <Star {...args} />;

export const Default = Template.bind({});
Default.args = {
  rating: 4.5,
  emptyStar: emptyStar,
  fullStar: fullStar,
  halfStar: halfStar,
};
