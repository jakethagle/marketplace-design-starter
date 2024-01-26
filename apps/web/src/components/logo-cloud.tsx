"use client";
export default function LogoCloud() {
  return (
    <div className="">
      <h2 className="text-lg font-semibold leading-8">
        Trusted by the world’s most innovative teams
      </h2>
      <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
        <img
          alt="Transistor"
          className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
          height={48}
          src="https://tailwindui.com/img/logos/transistor-logo-gray-900.svg"
          width={158}
        />
        <img
          alt="Reform"
          className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
          height={48}
          src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
          width={158}
        />
        <img
          alt="Tuple"
          className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
          height={48}
          src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
          width={158}
        />
        <img
          alt="SavvyCal"
          className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
          height={48}
          src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
          width={158}
        />
        <img
          alt="Statamic"
          className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
          height={48}
          src="https://tailwindui.com/img/logos/statamic-logo-gray-900.svg"
          width={158}
        />
      </div>
    </div>
  );
}
