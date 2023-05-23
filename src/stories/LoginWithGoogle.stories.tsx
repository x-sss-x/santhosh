import React from "react";
import { Story } from "@storybook/react";
import LoginWithGoogle from "../components/LoginWithGoogle";

export default {
  title: "Components/LoginWithGoogle",
  component: LoginWithGoogle,
};

const Template: Story = () => <LoginWithGoogle />;

export const Default = Template.bind({});
