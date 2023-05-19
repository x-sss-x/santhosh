import React from "react";
import { Story } from "@storybook/react";
import Profile, { ProfileProps } from "../components/Request";
import { RiArrowRightLine } from "react-icons/ri";
import profileImage from "../../public/Images/Profile/profile.png";

export default {
  title: "Components/Request",
  component: Profile,
};

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: profileImage,
  text: "John Doe",
  id_no: 12345,
  request:"Requested Taxi ride"
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  children: <RiArrowRightLine className="text-gray-500 mr-2" />,
};
