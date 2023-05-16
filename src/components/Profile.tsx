import Input, { InputExtendedProps } from './Input';
import Button, { ButtonExtendedProps } from './Button';

interface ProfileProps {
  name: string;
  email: string;
  customerId: string;
}

export default function Profile({ name, email, customerId }: ProfileProps) {
  const nameInputProps: InputExtendedProps = {
    placeholder: 'Name',
    inputVariant: 'username',
    value: name,
  };

  const emailInputProps: InputExtendedProps = {
    placeholder: 'Email',
    inputVariant: 'email',
    value: email,
  };

  const customerIdInputProps: InputExtendedProps = {
    placeholder: 'Customer ID',
    inputVariant: 'default',
    value: customerId,
  };

  const buttonProps: ButtonExtendedProps = {
    intent: 'primary',
    fullwidth: true,
  };

  return (
    <div className="flex flex-col space-y-4">
      <Input {...nameInputProps} />
      <Input {...emailInputProps} />
      <Input {...customerIdInputProps} />
      <Button {...buttonProps}>Sign In</Button>
    </div>
  );
}
