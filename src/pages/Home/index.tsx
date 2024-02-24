import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types/types";
import HomePageText from "@/assets/images/HomePageText.png";
import HomePageGraphic from "@/assets/images/HomePageGraphic.png";
import SponsorRedBull from "@/assets/images/SponsorRedBull.png";
import SponsorForbes from "@/assets/images/SponsorForbes.png";
import SponsorFortune from "@/assets/images/SponsorFortune.png";
import { ActionButton } from "@/shared/compo/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type propsType = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const Home: React.FC<propsType> = ({ setSelectedPage }: propsType) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
      >
        <div className="z-10 mt-28 md:basis-3/5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:mt-20"
          >
            <div className="relative">
              <div className=" before:absolute before:-left-20 before:z-[-1] before:-top-20 md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
              tempore voluptatibus nesciunt ut voluptatum praesentium! In natus
              ad consequatur reiciendis.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8  flex items-center gap-8 "
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              {" "}
              Join Now
            </ActionButton>
            <AnchorLink
              href={`${SelectedPage.ContactUs}`}
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              className="text-sm font-bold text-primary-500"
            >
              Join Now
            </AnchorLink>
          </motion.div>
        </div>
        <div
          className="flex basis-3/5  md:z-10
        md:ml-40 md:mt-16 justify-end
        "
        >
          <img alt="home-page-graphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {isAboveMediumScreen && (
        <div className="h-[150px]  w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 mx-auto justify-between gap-8 items-center">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
