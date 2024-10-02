import React from 'react';
import Input from './Input';
import Button from './Button';

interface FormFieldProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
  required?: boolean;
  buttonText: string;
  onClick: () => void;
  buttonVariant: string;
  inputVariant: string;
}

const FormField: React.FC<FormFieldProps> = ({ placeholder, onChange, value, disabled, required, buttonText, onClick, buttonVariant, inputVariant }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-3">
        <Input placeholder={placeholder} onChange={onChange} value={value} disabled={disabled} required={required} variant={inputVariant} />
        <Button onClick={onClick} variant={buttonVariant} size="sm">{buttonText}</Button>
    </div>
  );
};

export default FormField;
