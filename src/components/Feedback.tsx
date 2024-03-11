"use client";

import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import CarouselInApp from "./Carousel";

const Feedback = () => {
  return (
    <MaxWidthWrapper id="feedback">
      <div className="flex flex-col justify-center items-center">
        <CarouselInApp />
      </div>
    </MaxWidthWrapper>
  );
};

export default Feedback;
