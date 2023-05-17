import type { Meta, StoryObj } from '@storybook/react';
import Input, { InputProps } from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Default Input",
  },
};

export const Email: Story = {
  args: {
    placeholder: "Email",
    inputVariant: "email",
  },
};

export const Username: Story = {
  args: {
    placeholder: "Username",
    inputVariant: "username",
  },
};



export const PhoneNumber: Story = {
    args: {
      placeholder: "Phone Number",
      inputVariant: "phoneNumber",
  },
  };

  export const Age: Story = {
    args: {
      placeholder: "Age",
      inputVariant: "age",
  },
  };

  
  export const Address: Story = {
    args: {
      placeholder: "Address",
      inputVariant: "address",
  },
  };

  
  export const Password: Story = {
    args: {
      placeholder: "********",
      inputVariant: "password",
  },
  };

  export const ConfirmPassword: Story = {
    args: {
      placeholder: "********",
      inputVariant: "password",
  },
  };
  
export const Specialization : Story = {
args : {
  placeholder: 'Specialization',
  inputVariant: 'specialization' as const,
},
};
export const idproff : Story = {
  args : {
    placeholder: 'idproff',
    inputVariant: 'idproff' as const,
  },
  };