import * as React from "react";
import { classNames as cn } from "../lib/utils";

// const MarketplaceCardVariant = ['basic'] as const;

type MarketplaceAvatarProps = {
  src: string;
  loading: string;
  className: string;
} & React.ComponentPropsWithRef<"img">;

export const MarketplaceAvatar = React.forwardRef<
  HTMLDivElement,
  MarketplaceAvatarProps
>(({ src, className, ...rest }) => {
  return (
    <img
      {...rest}
      alt="avatar"
      className={cn("mx-auto h-32 w-32 flex-shrink-0 rounded-full", className)}
      src={src}
    />
  );
});
MarketplaceAvatar.displayName = "MarketplaceAvatar";

type MarketplaceCardProps = React.ComponentPropsWithRef<"div">;
export const MarketplaceCard = React.forwardRef<
  HTMLDivElement,
  MarketplaceCardProps
>(({ children, className, ...rest }, ref) => {
  return (
    <div
      className={cn(
        "cursor-pointer relative overflow-hidden flex flex-col divide-y divide-neutral-content divide-opacity-10 shadow rounded-lg bg-neutral text-center ring-0 hover:ring-1 hover:ring-primary",
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});
MarketplaceCard.displayName = "MarketplaceCard";

type MarketplaceCardContentProps = React.ComponentPropsWithRef<"div">;
export const MarketplaceCardContent = React.forwardRef<
  HTMLDivElement,
  MarketplaceCardContentProps
>(({ children, className, ...rest }, ref) => {
  return (
    <div
      className={cn("flex flex-1 flex-col p-8", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});
MarketplaceCardContent.displayName = "MarketplaceCardContent";
export type MarketplaceCardDescriptionProps = {
  description: string;
} & React.ComponentPropsWithRef<"p">;

export const MarketplaceCardDescription = React.forwardRef<
  HTMLParagraphElement,
  MarketplaceCardDescriptionProps
>(({ description, className, ...rest }, ref) => {
  return (
    <p
      className={cn("flex items-center text-sm gap-2 mb-3", className)}
      ref={ref}
      {...rest}
    >
      {description}
    </p>
  );
});
MarketplaceCardDescription.displayName = "MarketplaceCardDescription";

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

export type MarketplaceCardTitleProps = {
  title: string;
} & React.ComponentPropsWithRef<"h2">;
export const MarketplaceCardTitle = React.forwardRef<
  HTMLHeadingElement,
  MarketplaceCardTitleProps
>(({ title, className, ...rest }, ref) => {
  return (
    <h2 className={cn("text-lg font-medium", className)} ref={ref} {...rest}>
      {title}
    </h2>
  );
});
MarketplaceCardTitle.displayName = "MarketplaceCardTitle";
export default MarketplaceCard;
