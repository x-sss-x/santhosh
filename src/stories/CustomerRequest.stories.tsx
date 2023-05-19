import React from "react";
import { Story } from "@storybook/react";
import CustomerRequest, { CustomerRequestProps } from "../components/CustomerRequest";
import ProfileIcon from "../../public/Images/Profile/profile.png";

export default {
  title: "Components/CustomerRequest",
  component: CustomerRequest,
};

const Template: Story<CustomerRequestProps> = (args) => <CustomerRequest {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: ProfileIcon,
  name: "John",
  id: "200303",
  pickupTime: "11:00AM",
  fromLocation: "Bangalore",
  toLocation: "Airport",
  date: "2/3/23",
  status: "Accepted",
};
