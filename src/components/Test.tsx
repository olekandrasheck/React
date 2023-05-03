import { useState } from "react"; // здесь мы разворачиваем обьект и импортируем одно свойство
import React from "react"; // мы импортируем целый класс реакта чтобы потом отдельно не испортировать его свойства

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [value, setValue] = React.useState("2");
  return (
    <div
      className="wrapper"
      style={{ backgroundColor: "red", width: "300px", padding: "10px" }}
    >
      {children}
    </div>
  );
};

const Wrapper2: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="wrapper"
      style={{ backgroundColor: "green", width: "600px", padding: "20px" }}
    >
      {children}
    </div>
  );
};

//Универсальный компонент
const Button: React.FC<{ onClick?: () => void; name?: string }> = ({
  onClick,
  name,
}) => (
  <button onClick={onClick} className="sasha" style={{ width: "100%" }}>
    {name ? name : "Button"}
  </button>
);

const Input: React.FC<{}> = () => (
  <input className="sasha" style={{ width: "100%" }} />
);

export const MainTest: React.FC<{}> = () => {
  return (
    <div>
      <Button />
      <Input />
      <Wrapper>
        <Button />
        <Input />
      </Wrapper>
      <Wrapper2>
        <Button />
        <Button />
      </Wrapper2>
    </div>
  );
};
