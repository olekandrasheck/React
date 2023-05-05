import React, { FC } from "react";
import "./card.scss";

export interface ICardProduct {
  images: string[];
  title: string;
  description: string;
  price: number;
}

export const CardProduct: FC<ICardProduct> = ({
  images,
  title,
  description,
  price,
}) => {
  return (
    <div className="card">
      <img className="img" alt="pic" src={images[0]}></img>
      <div className="text-wrapper">
        <h3> Name: {title}</h3>
        <p>Description: {description}</p>
        <span>${price}</span>
      </div>
    </div>
  );
};
