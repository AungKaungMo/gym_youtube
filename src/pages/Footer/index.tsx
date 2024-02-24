import Logo from "@/assets/images/Logo.png";

import React from "react";

export const Footer: React.FC<{}> = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus non repudiandae incidunt magnam ipsam corrupti,
            officiis veritatis numquam suscipit nihil!
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Medical Stop</p>
          <p className="my-5">Hlaing</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            nesciunt sed explicabo.
          </p>
        </div>
      </div>
    </footer>
  );
};
