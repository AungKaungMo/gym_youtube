import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../types/types";

type propsTypes = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

export const ActionButton: React.FC<propsTypes> = ({
  children,
  setSelectedPage,
}: propsTypes) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-400 px-10 py-2 hover:bg-primary-500"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};
