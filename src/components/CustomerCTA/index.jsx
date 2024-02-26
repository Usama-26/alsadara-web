import Link from "next/link";
import React from "react";
export default function CustomerCTA({}) {
  return (
    <section className="bg-gray-900/80">
      <div className="py-10 banner-bg text-white">
        <div className="constrained-padded">
          <div className="flex lg:flex-row flex-col gap-4 justify-between font-display py-4 px-8">
            <h1>
              Have questions or need assistance? Don’t hesitate! Contact us
              today we’re here to help!
            </h1>
            <div>
              <Link href="partner" className="border-b border-gray-600">
                Reach Out now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
