import styles from "./input.module.css";
import { ChangeEvent, FunctionComponent } from "react";

interface InputProps {
  label: string;
  name: string;
  type: "text" | "number" | "email" | "password";
  placeholder: string;
  value: string;
  maxLength: number;
  onTextChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FunctionComponent<InputProps> = ({
  label,
  name,
  type,
  value,
  placeholder,
  maxLength,
  onTextChange,
}) => {
  return (
    <div className={styles.input_container}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onTextChange}
        maxLength={maxLength}
      />
    </div>
  );
};

export default Input;
