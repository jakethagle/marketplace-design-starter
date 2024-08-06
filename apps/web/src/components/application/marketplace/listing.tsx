"use client";
import { classNames } from "@/lib/utils";
import { PrismaticAvatar } from "@/prismatic/components/prismatic-avatar";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

interface MarketplaceListing {
  key: string;
  name: string;
  version: {
    name: string;
    date: string;
    datetime: string;
  };
  price: string;
  description: string;
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
}
interface ListingProps {
  item: MarketplaceListing;
}
const product = {
  name: "Salesforce",
  version: { name: "6", date: "January 1, 2024", datetime: "" },
  price: "$220",
  description:
    "Elevate your business efficiency with our Advanced Salesforce Integration. This robust integration is designed to seamlessly connect Salesforce with your existing business applications, creating a unified and powerful system for managing customer relationships and streamlining processes",
  highlights: [
    "Bidirectional data sync",
    "Real-time analytics",
    "Enhanced productivity",
    "Customizable and scalable",
  ],
  imageSrc: "/salesforce-integration.png",
  imageAlt:
    "Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.",
};
interface RelatedMarketplaceListing {
  id: number;
  key: string;
  name: string;
  category: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}
const _relatedListings: RelatedMarketplaceListing[] = [
  {
    id: 1,
    key: "hubspot",
    name: "Hubspot",
    category: "CRM",
    href: "#",
    imageSrc: "/salesforce-integration.png",
    imageAlt:
      "Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.",
  },
];
export function ListingCoverImage({
  item,
}: {
  item: MarketplaceListing;
}): JSX.Element {
  return (
    <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-background">
      <PrismaticAvatar avatarUrl={item.imageSrc as unknown as string} />
    </div>
  );
}
export function ChangeLog({ changeLog }: { changeLog: string }): JSX.Element {
  return (
    <div
      className="prose prose-sm max-w-none text-muted-foreground prose-headings:text-foreground"
      dangerouslySetInnerHTML={{ __html: changeLog }}
    />
  );
}
export function Faq({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}): JSX.Element {
  return (
    <>
      <h3 className="sr-only">Frequently Asked Questions</h3>
      <dl>
        {faqs.map((faq) => (
          <Fragment key={faq.question}>
            <dt className="mt-10 font-medium text-foreground">
              {faq.question}
            </dt>
            <dd className="prose prose-sm mt-2 max-w-none text-muted-foreground">
              <p>{faq.answer}</p>
            </dd>
          </Fragment>
        ))}
      </dl>
    </>
  );
}

export function DetailTabs({
  item,
}: {
  item: MarketplaceListing;
}): JSX.Element {
  const _faqs = [
    {
      question: "Does the data sync in real time?",
      answer: `Yes, our robust ${item.name} integration automatically synchronizes data between ${item.name} and our platform to ensure consistent information across your tech stack, including contacts, leads, opportunities, and custom objects.`,
    },
    {
      question: `Can I customize workflows within the ${item.name} integration?`,
      answer: `Absolutely! Our integration allows you to create custom workflows to automate repetitive tasks. You can trigger actions in ${item.name} based on events in other applications, and vice versa, to enhance productivity and reduce manual errors.`,
    },
    {
      question: `Is there support for analytics and reporting?`,
      answer: `Yes, our integration extends to analytics and reporting. By integrating ${item.name} data with your business intelligence tools, you can generate comprehensive reports and dashboards for informed decision-making.`,
    },
    {
      question: `How does the integration handle data security and compliance?`,
      answer: `Security and compliance are top priorities. Our integration adheres to the highest standards with end-to-end encryption and is compliant with GDPR, HIPAA, and other regulatory requirements to safeguard sensitive data.`,
    },
    {
      question: `Is the ${item.name} integration scalable?`,
      answer: `Definitely. Our integration is designed to be fully scalable, accommodating the growth of your business and evolving requirements with ease.`,
    },
    {
      question: `What type of customer support is available for this integration?`,
      answer: `We provide 24/7 dedicated customer support to assist with any issues or queries you may have. Our team is committed to ensuring a smooth experience with our integration.`,
    },
  ];
  return (
    <div className="mt-16 w-full lg:col-span-4 lg:mt-0">
      <Tab.Group as="div">
        <div className="border-b ">
          <Tab.List className="-mb-px flex space-x-8">
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? "border-primary text-primary"
                    : "border-transparent  hover:border-muted-foreground",
                  "whitespace-nowrap border-b-2 py-6 text-sm font-medium outline-none transition-colors",
                )
              }
            >
              Change Log
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  selected
                    ? "border-primary text-primary"
                    : "border-transparent  hover:border-muted-foreground",
                  "whitespace-nowrap border-b-2 py-6 text-sm font-medium outline-none transition-colors",
                )
              }
            >
              FAQ
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels as={Fragment}>
          <Tab.Panel className="pt-10">
            <h3 className="sr-only">Changelog</h3>
            <ChangeLog
              changeLog={`
    <h2>Changelog Summary - ${item.name} Integration v6 (January 1, 2024)</h2>

    <h3>New Features:</h3>
    <ul>
        <li>Advanced Custom Field Mapping for complex data structures.</li>
        <li>Enhanced Reporting Capabilities with new BI tool integrations.</li>
        <li>Multi-Language Support for additional languages.</li>
    </ul>

    <h3>Improvements:</h3>
    <ul>
        <li>User Interface Enhancements for better navigation.</li>
        <li>Performance Optimization for faster data processing.</li>
        <li>Improved Workflow Automation for precise task handling.</li>
    </ul>

    <h3>Bug Fixes:</h3>
    <ul>
        <li>Resolved custom object sync issues.</li>
        <li>Fixed intermittent third-party application connectivity.</li>
        <li>Corrected rare data mapping errors.</li>
    </ul>

    <h3>Security and API Updates:</h3>
    <ul>
        <li>Added new encryption protocols.</li>
        <li>Introduced new API endpoints; deprecated outdated ones.</li>
    </ul>

    <h3>Documentation & Support:</h3>
    <ul>
        <li>Updated guides and API docs.</li>
        <li>Expanded customer support hours and self-service portal.</li>
    </ul>
  `}
            />
          </Tab.Panel>
          <Tab.Panel className="text-sm ">
            <Faq faqs={_faqs} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default function Listing({ item }: ListingProps): JSX.Element {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
        {/* <div className="lg:col-span-4 lg:row-end-1 max-w-2xl mx-auto lg:max-w-none lg:mx-0">
          <ListingCoverImage item={item} />
        </div> */}
        <ListingDetails item={item} />
        {/* Change Log/FAQ Tabs */}
        <DetailTabs item={item} />
      </div>
      {/* Related Integrations*/}
      <RelatedListings listings={_relatedListings} />
    </div>
  );
}

export function RelatedListings({
  listings,
}: {
  listings: RelatedMarketplaceListing[];
}): JSX.Element {
  return (
    <div className="mt-24 sm:mt-32">
      <div className="flex items-center justify-between space-x-4">
        <h2 className="text-lg font-medium ">Customers also viewed</h2>
        <Link className="btn btn-link" href="/marketplace">
          View all
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        {listings.map((l) => (
          <div className="group relative" key={l.id}>
            <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-primary/5">
              <img
                alt={l.imageAlt}
                className="object-cover object-center"
                src={l.imageSrc}
              />
              <div
                aria-hidden="true"
                className="flex items-end p-4 opacity-0 group-hover:opacity-100"
              >
                <div className="w-full rounded-md text-base-content bg-primary/10 bg-opacity-75 px-4 py-2 text-center text-sm font-medium  backdrop-blur backdrop-filter">
                  View Product
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium ">
              <h3>
                <a href="/#">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {l.name}
                </a>
              </h3>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{l.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export function ListingDetails({
  item,
}: {
  item: MarketplaceListing;
}): JSX.Element {
  return (
    <div className="mt-14 sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0">
      <div className="flex flex-col-reverse">
        <div className="mt-4">
          <h1 className="text-2xl font-bold tracking-tight  sm:text-3xl">
            {item.name}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Version {item.version.name} (Updated{" "}
            <time dateTime={item.version.datetime}>{item.version.date}</time>)
          </p>
        </div>
      </div>

      <p className="mt-6 text-muted-foreground">{item.description}</p>

      <div className="mt-10 border-t  pt-10">
        <h3 className="text-sm font-medium ">Highlights</h3>
        <div className="prose prose-sm mt-4 text-muted-foreground">
          <ul>
            {product.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t pt-10">
        <h3 className="text-sm font-medium ">Recent Update</h3>
        <p className="mt-4 text-sm text-muted-foreground">
          {`${item.name} Integration v6 (January 1, 2024) - New Features, Improvements, Bug Fixes, Security and API Updates, Documentation & Support.`}{" "}
          <a
            className="font-medium text-primary hover:text-primary/70"
            href={"/#"}
          >
            Read full changelog
          </a>
        </p>
      </div>
    </div>
  );
}
