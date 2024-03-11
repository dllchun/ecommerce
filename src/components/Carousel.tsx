import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import Image from "next/image";

const CarouselInApp = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      console.log("current");
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="md:p-4 p-8 max-w-full">
      <Carousel
        setApi={setApi}
        className="w-full max-w-2xl shadow-xl lg:mt-12 mt-8 rounded-xl "
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex flex-col items-center justify-center px-8 py-4 space-y-6">
                  <div className="rounded-full w-10 h-10 bg-primary  flex justify-center items-center  text-white">
                    <Image
                      src="./comment.svg"
                      alt="comment logo"
                      width="18"
                      height="18"
                      className=""
                    />
                  </div>
                  <span className="text-center text-md ">
                    I ordered the Margherita pizza, and it was phenomenal! The
                    crust was perfectly crispy on the edges, yet soft and chewy
                    inside. The sauce was flavorful and tasted like vine-ripened
                    tomatoes.
                  </span>
                  <div className="flex flex-col justify-center items-center  space-y-2">
                    <div className="flex space-x-2">
                      <Image
                        src="./star.svg"
                        width="18"
                        height="18"
                        alt="star"
                      />
                      <Image
                        src="./star.svg"
                        width="18"
                        height="18"
                        alt="star"
                      />
                      <Image
                        src="./star.svg"
                        width="18"
                        height="18"
                        alt="star"
                      />
                      <Image
                        src="./star.svg"
                        width="18"
                        height="18"
                        alt="star"
                      />
                      <Image
                        src="./emptystar.svg"
                        width="18"
                        height="18"
                        alt="star"
                      />
                    </div>
                    <span className="font-bold">Vincent Cheung</span>
                    <span className="text-muted-foreground text-sm">
                      Customer
                    </span>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground mt-8">
        {current} / {count}
      </div>
    </div>
  );
};

export default CarouselInApp;
