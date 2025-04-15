import {
  ComponentPropsWithoutRef,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

// This is the ref from the parent component that will be able to be used to call the methods (clear in this case)
export type FormHandle = {
  clear: () => void;
};


type FormProps = ComponentPropsWithoutRef<"form"> & {
  children: React.ReactNode;
  // when you don't know in advance what the value will be
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(
  ({ children, onSave, ...props }, ref) => {
    const form = useRef<HTMLFormElement>(null);

    // first argument is the ref from forwardRef, the second argument is a 
    // function that returns an object with methods you can call on the ref
    // This is not as common, but can be useful
    useImperativeHandle(ref, () => {
      return {
        clear: () => {
          // Clear the form fields
          form.current?.reset();
        }
      }
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Get the form data
      const data = new FormData(event.currentTarget);

      // Convert FormData to a plain object
      const formData = Object.fromEntries(data.entries());

      // Call the onSave function with the form data
      // This uses the UseImperativeHandle hook to use the methods defined above => in this case, clear()
      onSave(formData);
    };

    return (
      <form onSubmit={handleSubmit} {...props} ref={form}>
        {children}
      </form>
    );
  }
);

export default Form;
