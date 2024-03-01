/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="h-screen w-screen">
      <div className="h-full flex flex-col gap-6 items-center justify-center">
        <Image
          src={"/images/404.svg"}
          height={1000}
          width={1000}
          className="w-80"
          alt="404"
        />
        <div className="space-y-2 font-display text-primary text-center lg:text-3xl text-xl">
          <h1>404!</h1>
          <h1>Oh no. We lost this page</h1>
        </div>
        <p className="text-center max-w-2xl lg:text-base text-sm px-5 lg:px-0">
          Looks like we took a wrong turn. This page seems to be playing hide
          and seek. Let&apos;s head back to the main site and discover more
          exciting stuff together!
        </p>
        <a
          href="/"
          className="px-6 py-2 rounded-full bg-primary hover:bg-primary-light text-white font-medium"
        >
          Back to Homepage
        </a>
      </div>
    </section>
  );
}
