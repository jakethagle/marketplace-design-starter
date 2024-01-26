"use client";
import { Button } from "@repo/ui";
import Link from "next/link";
import HeroImage from "./hero-image";

export default function HeroPage() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 ">
      <div className="mx-auto px-6 sm:max-w-4xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-6xl">
            <span className="block">Supercharge your</span>
            <span className="block text-primary/90">business.</span>
          </h1>
          <p className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Connect your favorite apps and services through our self-serve
            integration marketplace.
          </p>
          <div className="mt-10 sm:mt-12">
            <Link href="/marketplace">
              <Button className="text-lg w-full max-w-[70%] mx-auto">
                View Integrations
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <HeroImage />
    </div>
  );
}
