import Link from "next/link";
import React from "react";
export default function PartnerCTA({}) {
  return (
    <div className="py-10 banner-bg">
      <div className="constrained-padded">
        <div className="flex lg:flex-row flex-col gap-4 justify-between font-display py-4 px-8">
          <h1>To become a partner of alsadara feel free to contact us today</h1>
          <div>
            <Link href="partner" className="border-b border-gray-600">
              Become a partner
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
