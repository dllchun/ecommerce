"use client";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NewsletterSchema, newsletterSchema } from "@/lib/validation";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const Newsletter = () => {
  const form = useForm<NewsletterSchema>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterSchema) => {
    if (!data) {
      toast.error("No email has been received");
    }

    await toast.success(
      "You have subscribed the newsletter with the following email: \n" +
        data.email
    );
    form.reset();
  };
  const imageUrl = "/newsletterbg.jpg";

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col justify-center items-center text-center">
        <div
          className="w-full max-w-4xl bg-cover bg-center px-12 py-20 rounded-xl shadow-2xl relative"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black opacity-75 rounded-xl"></div>

          <div className="relative z-10 flex flex-col space-y-4">
            <span className="text-white text-2xl font-bold">
              Sign up to get attractie discount codes
            </span>
            <span className="text-sm text-muted">
              We believe that pizza is more than just a food; it is an
              experience
            </span>
            <div className="pt-4 flex items-center justify-center">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex justify-between items-center space-x-2 bg-white rounded-lg py-2 px-2"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="flex-1 border-none "
                            placeholder="Your email address"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  ></FormField>
                  <Button type="submit" className="shrink-0">
                    SUBMIT
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Newsletter;
