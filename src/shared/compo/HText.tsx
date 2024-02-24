import React from "react";

type propsType = {
  children: React.ReactNode;
};
export const HText: React.FC<propsType> = ({ children }: propsType) => {
  return (
    <h1 className=" basis-3/5 font-montserrat text-3xl font-bold">
      {children}
    </h1>
  );
};
