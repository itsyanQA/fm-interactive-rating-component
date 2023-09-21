import React, { ReactNode } from "react";
import "./Card.scss";

type CardProps = {
  children: ReactNode;
  props?: any;
};

function Card({ children, props }: CardProps) {
  return (
    <article {...props} id="card">
      {children}
    </article>
  );
}

export default Card;
