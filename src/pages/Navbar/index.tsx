import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "@/assets/images/Logo.png";
import { Link } from "./Link";
import { SelectedPage } from "@/shared/types/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ActionButton } from "@/shared/compo/ActionButton";

type propsType = {
  selectedPage: SelectedPage;
  isTop: boolean;
  setSelectedPage: (value: SelectedPage) => void;
};

export const Navbar: React.FC<propsType> = ({
  isTop,
  selectedPage,
  setSelectedPage,
}: propsType) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);

  const navbarBg = isTop ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav>
      <div
        className={`${navbarBg} flex items-center justify-between fixed top-0 z-30 w-full py-6`}
      >
        <div className="flex items-center justify-between mx-auto w-5/6">
          <div className="flex items-center justify-between w-full gap-16">
            <img src={Logo} alt="logo" />

            {isAboveMediumScreen ? (
              <>
                <div className="flex justify-between items-center w-full">
                  <div className="flex w-full items-center justify-center gap-8 text-sm">
                    <Link
                      page="Home"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link
                      page="Benefits"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link
                      page="Our Classes"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <Link
                      page="Contact Us"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>
                  <div className="flex w-full items-center justify-center gap-8">
                    <p>Sign In</p>
                    <ActionButton setSelectedPage={setSelectedPage}>
                      <p>Become a member</p>
                    </ActionButton>
                  </div>
                </div>
              </>
            ) : (
              <>
                <button
                  className=" rounded-full bg-secondary-400 p-2"
                  onClick={() => setIsMenuToggle(!isMenuToggle)}
                >
                  <Bars3Icon className="w-6 h-6 text-white" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      {!isAboveMediumScreen && isMenuToggle && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-md">
          <div className="flex justify-end p-10">
            <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
              <XMarkIcon className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          <div className=" flex flex-col gap-8 ml-12">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};
