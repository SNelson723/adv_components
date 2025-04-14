import { type ComponentPropsWithoutRef } from "react";

// discriminated union
type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;

const Button = (props: ButtonProps | AnchorProps) => {
  if (props.el === "anchor") {
    return <a className="button" {...props}></a>;
  }

  return (
    <button className="button" {...props}>
      Click Me
    </button>
  );
};

// type Button2Props = ComponentPropsWithoutRef<"button"> & {
//   href?: never; //stops from adding href to button props
// };
// type Anchor2Props = ComponentPropsWithoutRef<"a"> & {
//   href?: string;
// };

// type predicate => use this to narrow down the type of props
// const isAnchorProps = (props: Button2Props | Anchor2Props): props is Anchor2Props => {
//   // If this is true, then the function returns true and TypeScript knows props is Anchor2Props
//   return "href" in props;
// };

// Downside of the previous approach is that we need to check the type of props every time
// TypeScript will not infer the type of props correctly in the return statement, therefore when
// using this in other components, TypScript doesn't offer assistance for the props of the component

// const Button = (props: Button2Props | Anchor2Props) => {
//   if (isAnchorProps(props)) {
//     return <a className="button" {...props}></a>;
//   }

//   return (
//     <button className="button" {...props}>
//       Click Me
//     </button>
//   );
// };

export default Button;
