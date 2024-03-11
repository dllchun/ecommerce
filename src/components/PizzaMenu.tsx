"use client";

import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "./ui/checkbox";

const PizzaMenu = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col justify-center items-center">
        <span className="text-muted-foreground font-semibold">CHECK OUT</span>
        <h2 className="text-primary font-bold italic text-4xl">
          Our Best Sellers
        </h2>
        <div className="py-8 w-full text-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 ">
          {/* TODO: Build pizza modeling */}
          <div className="flex flex-col items-center bg-slate-50 shadow p-8 rounded  ">
            <div className="flex items-center justify-center  w-full py-2">
              <Image
                src="/pizza.png"
                width={160}
                height={160}
                alt="pizza imagee"
              />
            </div>
            <p className="mb-3 font-bold">Classic Chicken</p>
            <p className="max-w-[230px] text-muted-foreground">
              Delicious chicken takes center stage. Grab a slice of our classic
              chicken pizza topped with premium juicy.
            </p>
            {/* TODO: Separate this component */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-6 w-full">Add to cart</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Classic Chicken</DialogTitle>
                  <DialogDescription>
                    Delicious chicken takes center stage. Grab a slice of our
                    classic chicken pizza topped with premium juicy.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col space-y-6">
                  <div className="space-y-3">
                    <p>Pick your size</p>
                    <RadioGroup defaultValue="smPrice">
                      <div className="flex items-center space-x-2 border p-4 rounded-lg">
                        <RadioGroupItem value="smPrice" id="smPrice" />
                        <Label htmlFor="smPrice">Small $12</Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-4 rounded-lg">
                        <RadioGroupItem value="mdPrice" id="mdPrice" />
                        <Label htmlFor="mdPrice">Medium $14</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-3">
                    <p>Any extras?</p>
                    <div className="border p-4 rounded-lg flex items-center space-x-2">
                      <Checkbox id="extraCheese" />
                      <label htmlFor="extraCheese">Extra cheese +$1</label>
                    </div>
                    <div className="border p-4 rounded-lg flex items-center space-x-2">
                      <Checkbox id="extraPepperoni" />
                      <label htmlFor="extraPepperoni">
                        Extra pepperoni +$2
                      </label>
                    </div>
                  </div>
                  <Button className="mt-6 w-full">Add to cart</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex flex-col items-center bg-slate-50 shadow p-8 rounded  ">
            <div className="flex items-center justify-center  w-full py-2">
              <Image
                src="/pizza.png"
                width={160}
                height={160}
                alt="pizza imagee"
              />
            </div>
            <p className="mb-3 font-bold">Classic Chicken</p>
            <p className="max-w-[230px] text-muted-foreground">
              Delicious chicken takes center stage. Grab a slice of our classic
              chicken pizza topped with premium juicy.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-6 w-full">Add to cart</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Classic Chicken</DialogTitle>
                  <DialogDescription>
                    Delicious chicken takes center stage. Grab a slice of our
                    classic chicken pizza topped with premium juicy.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col space-y-6">
                  <div className="space-y-3">
                    <p>Pick your size</p>
                    <RadioGroup defaultValue="smPrice">
                      <div className="flex items-center space-x-2 border p-4 rounded-lg">
                        <RadioGroupItem value="smPrice" id="smPrice" />
                        <Label htmlFor="smPrice">Small $12</Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-4 rounded-lg">
                        <RadioGroupItem value="mdPrice" id="mdPrice" />
                        <Label htmlFor="mdPrice">Medium $14</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-3">
                    <p>Any extras?</p>
                    <div className="border p-4 rounded-lg flex items-center space-x-2">
                      <Checkbox id="extraCheese" />
                      <label htmlFor="extraCheese">Extra cheese +$1</label>
                    </div>
                    <div className="border p-4 rounded-lg flex items-center space-x-2">
                      <Checkbox id="extraPepperoni" />
                      <label htmlFor="extraPepperoni">
                        Extra pepperoni +$2
                      </label>
                    </div>
                  </div>
                  <Button className="mt-6 w-full">Add to cart</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex flex-col items-center bg-slate-50 shadow p-8 rounded  ">
            <div className="flex items-center justify-center  w-full py-2">
              <Image
                src="/pizza.png"
                width={160}
                height={160}
                alt="pizza imagee"
              />
            </div>
            <p className="mb-3 font-bold">Classic Chicken</p>
            <p className="max-w-[230px] text-muted-foreground">
              Delicious chicken takes center stage. Grab a slice of our classic
              chicken pizza topped with premium juicy.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-6 w-full">Add to cart</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Classic Chicken</DialogTitle>
                  <DialogDescription>
                    Delicious chicken takes center stage. Grab a slice of our
                    classic chicken pizza topped with premium juicy.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col space-y-6">
                  <div className="space-y-3">
                    <p>Pick your size</p>
                    <RadioGroup defaultValue="smPrice">
                      <div className="flex items-center space-x-2 border p-4 rounded-lg">
                        <RadioGroupItem value="smPrice" id="smPrice" />
                        <Label htmlFor="smPrice">Small $12</Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-4 rounded-lg">
                        <RadioGroupItem value="mdPrice" id="mdPrice" />
                        <Label htmlFor="mdPrice">Medium $14</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-3">
                    <p>Any extras?</p>
                    <div className="border p-4 rounded-lg flex items-center space-x-2">
                      <Checkbox id="extraCheese" />
                      <label htmlFor="extraCheese">Extra cheese +$1</label>
                    </div>
                    <div className="border p-4 rounded-lg flex items-center space-x-2">
                      <Checkbox id="extraPepperoni" />
                      <label htmlFor="extraPepperoni">
                        Extra pepperoni +$2
                      </label>
                    </div>
                  </div>
                  <Button className="mt-6 w-full">Add to cart</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default PizzaMenu;
