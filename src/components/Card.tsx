import { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
  actions: ReactNode;
}

const Card = ({ title, children, actions }: CardProps) => {
  return (
    <section
      style={{
        border: "2px solid white",
        // width: "25%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: '2rem'
      }}
    >
      <h2>{title}</h2>
      {children}
      {actions}
    </section>
  );
};

export default Card;
