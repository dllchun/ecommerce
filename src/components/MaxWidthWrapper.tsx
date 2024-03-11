import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
  className?: string;
  children: React.ReactNode;
  id?: string;
}

const MaxWidthWrapper = ({ className, children, id }: MaxWidthWrapperProps) => {
  return (
    <section
      className={cn("w-screen max-w-screen-xl mx-auto p-6", className)}
      id={id}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
