import * as React from "react";
import { classNames as cn } from "../lib/utils";

export type MarketplaceSectionHeadingProps = {
  title: string;
} & React.ComponentPropsWithRef<"h3">;
export const MarketplaceSectionHeading = React.forwardRef<
  HTMLHeadingElement,
  MarketplaceSectionHeadingProps
>(({ title, className, ...rest }, ref) => {
  return (
    <h3
      className={cn("text-2xl font-semibold leading-6", className)}
      ref={ref}
      {...rest}
    >
      {title}
    </h3>
  );
});
MarketplaceSectionHeading.displayName = "MarketplaceSectionHeading";

export type MarketplaceSectionDescriptionProps = {
  title: string;
} & React.ComponentPropsWithRef<"p">;
export const MarketplaceSectionDescription = React.forwardRef<
  HTMLParagraphElement,
  MarketplaceSectionDescriptionProps
>(({ title, className, ...rest }, ref) => {
  return (
    <p
      className={cn("max-w-4-xl text-sm leading-5 text-neutral-400", className)}
      ref={ref}
      {...rest}
    >
      {title}
    </p>
  );
});
MarketplaceSectionDescription.displayName = "MarketplaceSectionDescription";
