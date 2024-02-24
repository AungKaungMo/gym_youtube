import React from "react";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import { BenefitType, SelectedPage } from "@/shared/types/types";
import { motion } from "framer-motion";
import { HText } from "@/shared/compo/HText";
import { Benefit } from "./Benefit";
import { ActionButton } from "@/shared/compo/ActionButton";
import BenefitGraphic from "@/assets/images/BenefitsPageGraphic.png";

type propsType = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facitilies",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit blanditiis omnis, voluptatem laboriosam repudiandae",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit blanditiis omnis, voluptatem laboriosam repudiandae",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reprehenderit blanditiis omnis, voluptatem laboriosam repudiandae",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export const Benefits: React.FC<propsType> = ({
  setSelectedPage,
}: propsType) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            architecto amet odio veniam, molestias culpa laborum sed ea! Iste,
            repellendus!
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
            className="mt-5 md:flex justify-between items-center gap-8"
          >
            {benefits.map((benefit: BenefitType) => (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>
        </motion.div>

        <div className="mt-16 items-center justify-between md:flex gap-20">
          <img
            className="mx-auto "
            alt="benefits-page-grap"
            src={BenefitGraphic}
          />

          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident nemo, dignissimos magni laborum veritatis quae. Ullam
                eaque culpa dolores, nostrum minus distinctio, voluptatibus
                explicabo repellendus a nobis pariatur velit accusamus.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                possimus quod nihil, repudiandae eligendi veniam. Porro sapiente
                quos ratione delectus hic tenetur, impedit tempore dolor!
              </p>
            </motion.div>

            <div className="relative mt-16 ">
              <div className=" before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
