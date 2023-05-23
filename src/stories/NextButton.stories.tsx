import React from "react";
import { Story } from "@storybook/react";
import NextButton, { NextButtonProps } from "../components/NextButton";

export default {
  title: "Components/NextButton",
  component: NextButton,
};

const Template: Story<NextButtonProps> = (args) => <NextButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: () => {
    // Add your click logic here
  },
};
