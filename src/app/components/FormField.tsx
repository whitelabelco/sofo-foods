import React from 'react';
import Input from './Input';
import Text from './Text';

interface FormFieldProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ placeholder, onChange, value, disabled, required }) => {
  return (
    <div className="flex flex-col h-[70px] w-[216px] gap-3">
        <Text variant="formLabel">{placeholder}</Text>
        <Input placeholder={placeholder} onChange={onChange} value={value} disabled={disabled} required={required} variant="base" />
    </div>
  );
};

export default FormField;
