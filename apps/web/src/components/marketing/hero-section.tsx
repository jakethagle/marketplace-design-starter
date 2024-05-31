"use client";
import marketingConfig from "@/dynamicMarketingConfig.json";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import HeroImage from "./hero-image";

export default function HeroPageSection(): JSX.Element {
  return (
    <div className="relative isolate">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-primary/30 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            height={200}
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            patternUnits="userSpaceOnUse"
            width={200}
            x="50%"
            y={-1}
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg className="overflow-visible fill-gray-50" x="50%" y={-1}>
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          height="100%"
          strokeWidth={0}
          width="100%"
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:pb-40 lg:pt-32">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <div className="flex">
            <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span className="font-semibold text-primary">
                {marketingConfig.useCaseConnector} is live
              </span>
              <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />
              <a className="flex items-center gap-x-1" href="/#">
                <span aria-hidden="true" className="absolute inset-0" />
                See how to get connected
                <ChevronRightIcon
                  aria-hidden="true"
                  className="-mr-2 h-5 w-5 text-gray-400"
                />
              </a>
            </div>
          </div>
          <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {marketingConfig.ctaStatement}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {marketingConfig.ctaSubTitle}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              href="/#"
            >
              {marketingConfig.ctaButtonText}
            </a>
            <a
              className="text-sm font-semibold leading-6 text-gray-900"
              href="/#"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-3xl lg:m-0 lg:flex-auto lg:relative bg-opacity-0">
          <HeroImage />
        </div>
      </div>
    </div>
  );
}
