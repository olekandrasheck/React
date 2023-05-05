import React, { FC } from "react";

export interface IImage {
  src?: string;
  alt: string;
}
export const Image: FC<IImage> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};
