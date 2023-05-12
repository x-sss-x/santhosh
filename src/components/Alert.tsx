import type { Meta, Story } from "@storybook/react";
import Alert, { AlertProps } from "../components/Alert";

const meta: Meta<AlertProps> = {
  title: "components/Alert",
  component: Alert,
};

export default meta;

type AlertStoryProps = {
  args: AlertProps;
};

export const Success: Story<AlertStoryProps> = ({
  args: { variant = "success", children = "Success message ..." },
  ...props
}) => (
  <Alert variant={variant} {...props}>
    {children}
  </Alert>
);

export const Error: Story<AlertStoryProps> = ({
  args: { variant = "error", children = "Error message ..." },
  ...props
}) => (
  <Alert variant={variant} {...props}>
    {children}
  </Alert>
);

export const Warning: Story<AlertStoryProps> = ({
  args: { variant = "warning", children = "Warning message ..." },
  ...props
}) => (
  <Alert variant={variant} {...props}>
    {children}
  </Alert>
);
