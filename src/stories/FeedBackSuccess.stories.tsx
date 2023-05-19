import React from "react";
import { Story } from "@storybook/react";
import FeedBackSuccess, { FeedBackSuccessProps } from "../components/FeedBackSuccess";

export default {
  title: "Components/FeedBackSuccess",
  component: FeedBackSuccess,
};

const Template: Story<FeedBackSuccessProps> = (args) => <FeedBackSuccess {...args} />;

export const Default = Template.bind({});
