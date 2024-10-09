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
  buttonVariant: "red" | "blue" | "green" | "redText" | "blackText" | "blueText" | "transparentBlack" | "transparentWhite" | "product";
  inputVariant?: "base" | "dark";
}

const FormField: React.FC<FormFieldProps> = ({ placeholder, onChange, value, disabled, required, buttonText, onClick, buttonVariant, inputVariant }) => {
  return (
    <div className="flex flex-row sm:flex-col lg:flex-row justify-center lg:items-center gap-3">
        <Input placeholder={placeholder} onChange={onChange} value={value} disabled={disabled} required={required} variant={inputVariant} />
        <Button onClick={onClick} variant={buttonVariant}>{buttonText}</Button>
    </div>
  );
};

export default FormField;
