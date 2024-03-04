"use client";

import { customers } from "@/prismatic/constants/config";

// export default function LogoCloud(): JSX.Element {
//   return (
//     <div className="text-foreground rounded-xl bg-muted">
//       <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">

//         {/* <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5"> */}
//         <div className="mt-8 flow-root lg:mt-10">
//           <div className="-ml-8 -mt-4 flex flex-wrap justify-between lg:-ml-4">
//             {customers.map((c) => (
//               <div
//                 className="ml-8 mt-4 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0"
//                 key={c.name}
//               >
//                 <h2 className="text-2xl font-semibold leading-8">{c.name}</h2>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function LogoCloud() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight pb-4">
          Trusted by the world’s most innovative teams:
        </h2>
        <div className="-mx-6 mt-8 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          {customers.map((c) => (
            <div className="bg-foreground/10 p-8 sm:p-10" key={c.name}>
              <div
                className="h-12 max-h-12 w-full flex justify-center items-center"
                key={c.name}
              >
                <h3 className="text-2xl font-bold tracking-tight">{c.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
