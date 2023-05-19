import React from "react";
import { Story } from "@storybook/react";
import Profile, { ProfileProps } from "../components/ServiceProvider";
import { RiArrowRightLine } from "react-icons/ri";
import profileImage from "../../public/Images/Profile/profile.png";

export default {
  title: "Components/ServiceProvider",
  component: Profile,
};

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: profileImage,
  name: "John Doe",
  id_no: 12345,
  service: "taxi ride",
  date: "21/03/24",
  time:"23:00",
  fromLocation:"Hoskote",
  toLocation:"Airport",
  Amount:"300rs"
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  children: <RiArrowRightLine className="text-gray-500 mr-2" />,
};
