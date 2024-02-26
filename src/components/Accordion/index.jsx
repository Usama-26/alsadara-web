import { Disclosure } from "@headlessui/react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function Accordion({ service }) {
  return (
    <Disclosure as="div" key={service.heading} className="">
      {({ open }) => (
        <div className={`px-4 rounded-md ${open ? "bg-primary-light/10" : ""}`}>
          <dt>
            <Disclosure.Button
              className={`flex w-full items-start justify-between text-left text-gray-900 py-4 ${
                open ? "" : "border-b"
              }`}
            >
              <span className="text-base font-display text-primary font-semibold leading-7">
                {service.heading}
              </span>
              <span className="ml-6 flex h-7 items-center text-gray-500">
                {open ? (
                  <MinusCircleIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <PlusCircleIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className={`mt-2 pr-12 pb-4`}>
            <p className="text-base leading-7 text-gray-600">
              {service.details}
            </p>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
