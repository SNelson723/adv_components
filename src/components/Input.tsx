import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

// first type parameter is the type of the ref, second is the type of the props
// forwardRef is a higher order component that takes a component and returns a new component with a ref attached to it
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...props }, ref) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input ref={ref} id={id} name={id} {...props} />
      </p>
    );
  }
);

export default Input;
