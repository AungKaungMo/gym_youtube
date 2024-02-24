import { SelectedPage } from "@/shared/types/types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type propsType = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export const Link: React.FC<propsType> = ({
  page,
  selectedPage,
  setSelectedPage,
}: propsType) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${
        selectedPage == lowerCasePage
          ? "text-primary-500 "
          : "transition hover:text-primary-300"
      }`}
      href="#home"
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};
