import { type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
  // Retrieves the props an 'input' element accepts => WithoutRef means it doesn't take a ref
} & ComponentPropsWithoutRef<"input">;

const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </p>
  );
};

export default Input;
