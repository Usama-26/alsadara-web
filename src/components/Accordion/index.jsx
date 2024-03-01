import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/20/solid";

export default function Accordion({ openIndex, index, service, setOpenIndex }) {
  const open = openIndex === index;
  const handleOpen = () => {
    if (open) {
      setOpenIndex(-1);
    } else setOpenIndex(index);
  };
  return (
    <div as="div" className="">
      <div className={`px-4 rounded-md ${open ? "bg-primary-light/10" : ""}`}>
        <dt>
          <button
            onClick={handleOpen}
            className={`flex w-full items-start justify-between text-left text-gray-900 py-4 ${
              open ? "" : "border-b"
            }`}
          >
            <span className="text-base  text-primary font-bold leading-7">
              {service.heading}
            </span>
            <span className="ml-6 flex h-7 items-center text-gray-500">
              {open ? (
                <MinusCircleIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <PlusCircleIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </span>
          </button>
        </dt>
        <dd className={`mt-2 pb-4 ${open ? "block" : "hidden"}`}>
          <p className="text-base leading-7 text-gray-600">{service.details}</p>
        </dd>
      </div>
    </div>
  );
}
