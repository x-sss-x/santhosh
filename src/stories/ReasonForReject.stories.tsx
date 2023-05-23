import React, { useState } from "react";
import { Story } from "@storybook/react";
import ReasonForReject, { ReasonForRejectProps } from "../components/ReasonForReject";

export default {
  title: "Components/ReasonForReject",
  component: ReasonForReject,
};

const Template: Story<ReasonForRejectProps> = (args) => {
  const [reason, setReason] = useState(args.value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReason(event.target.value);
  };

  return <ReasonForReject {...args} value={reason} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  value: "",
};
