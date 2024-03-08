import { Dialog, Transition } from "@headlessui/react";
import {
  CheckBadgeIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import { Fragment } from "react";

export default function MyModal({ open, setOpen, heading, message }) {
  return (
    <>
      <Transition key={heading}  show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className=" mx-auto">
                    {heading === "success" ? (
                      <CheckCircleIcon className="mx-auto w-32 fill-primary" />
                    ) : (
                      <XCircleIcon className="mx-auto w-32 fill-red-500" />
                    )}
                  </div>
                  <div className="mt-4 text-center">
                    <p className="lg:text-base text-sm text-gray-700">
                      {message}
                    </p>
                  </div>

                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className="text-white rounded-full bg-primary-extralight hover:bg-primary px-8 py-2"
                      onClick={setOpen}
                    >
                      OK
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
