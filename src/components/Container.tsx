
// polymorphic component => it will be a wrapper component where we don't know in advance which component it will wrap
import { type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react";

// T type should be the identifier of the type set as the value as the "as" prop
type ContainerProps<T extends ElementType> = {
  as?: T // this extends JSX.IntrinsicElements
  children: ReactNode // children should be raw text or get some JSX
} & ComponentPropsWithoutRef<T>; // The extends ElementType on line 6 validates the Component prop here

const Container = <T extends ElementType>({as, children, ...props}: ContainerProps<T>) => {
  const Component = as || 'div';
  return <Component {...props}>{children}</Component>
};

export default Container;