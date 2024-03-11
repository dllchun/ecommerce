import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { linkList } from "@/lib/constant";
import { Button, buttonVariants } from "./ui/button";
import { Menu, ShoppingCart } from "lucide-react";
import { UserButton, auth, SignedIn, SignedOut } from "@clerk/nextjs";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const links = linkList;

  return (
    <MaxWidthWrapper id="navbar">
      <div className="flex justify-between items-center ">
        <div className="flex items-center justify-center">
          <span className="uppercase font-bold text-xl">Vincent Cheung</span>
          <div className="md:block hidden">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={buttonVariants({ variant: "ghost", size: "lg" })}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in" className={buttonVariants()}>
              Sign In
            </Link>
          </SignedOut>

          <div>
            <Button variant="ghost" className="md:block hidden">
              <ShoppingCart size={20} />
            </Button>
            <Sheet>
              <SheetTrigger asChild className="md:hidden block">
                <Menu size={24} className="cursor-pointer " />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader className="space-y-4">
                  <SheetTitle>Menu</SheetTitle>
                  <div className="flex flex-col space-y-4 ">
                    {links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                            size: "lg",
                          })
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Navbar;
