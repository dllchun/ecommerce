import Feedback from "@/components/Feedback";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Newsletter from "@/components/Newsletter";
import PizzaMenu from "@/components/PizzaMenu";
import { buttonVariants } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper id="hero">
        <div className="flex lg:flex-row lg:gap-0 gap-3 flex-col-reverse lg:justify-between justify-center items-center">
          <div className="flex flex-col flex-1 gap-8 lg:items-start items-center">
            <h1 className="text-4xl font-bold leading-[48px]">
              Everything is better <br className="lg:block hidden" /> with a
              Pizza
            </h1>
            <span className="max-w-[450px]">
              Pizza is the missing piece that makes every day complete, a simple
              yet delicious joy in life
            </span>
            <div className="flex gap-3">
              <Link href="/menu" className={buttonVariants()}>
                ORDER NOW
                <CircleArrowRight className="ml-2" />
              </Link>
              <Link
                href="/menu"
                className={buttonVariants({
                  variant: "ghost",
                })}
              >
                ORDER NOW
                <CircleArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="flex-1 bg-white aspect-video flex items-center justify-center">
            <Image src="/pizza.png" alt="pizza" width="500" height="500" />
          </div>
        </div>
      </MaxWidthWrapper>

      <PizzaMenu />
      <Feedback />
      <Newsletter />
    </>
  );
}
