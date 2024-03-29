import Link from "next/link";
import React from "react";
export default function PartnerCTA({}) {
  return (
    <section className="bg-gray-900/80">
      <div className="py-10 banner-bg text-white">
        <div className="constrained-padded">
          <div className="flex lg:flex-row flex-col gap-4 justify-between font-display py-4 px-8">
            <h1>
              To become a vendor with alsadara, feel free to contact us today.
            </h1>
            <div>
              <Link href="partner" className="border-b border-gray-200">
                Become a vendor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
