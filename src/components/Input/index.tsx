import styled from "styled-components";
import styles from "./styles.module.scss";

interface InputProps {
  className?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputItem = styled.input`
  color: #000;
  font-size: 14px;
  background-color: #f6f6f6;
  width: 100%;
  height: 100%;
  border: none;
`;

export const InputComponent = ({
  className,
  placeholder,
  type,
  value,
  onChange,
}: InputProps) => {
  return (
    <>
      <div className={[styles.container, className].join("")}>
        <InputItem
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        ></InputItem>
      </div>
    </>
  );
};
