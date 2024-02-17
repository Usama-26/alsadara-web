import SlickSlider from "@/components/SlickSlider";
import Image from "next/image";

const images = [
  "/images/partners/partner-1.png",
  "/images/partners/partner-2.png",
  "/images/partners/partner-3.png",
  "/images/partners/partner-4.png",
  "/images/partners/partner-5.png",
];

export default function OurPartners() {
  return (
    <section className="my-20">
      <div className="constrained-padded overflow-x-hidden">
        <h1 className="font-display lg:text-3xl text-2xl text-center capitalize">
          Our Trusted Partners
        </h1>
        <p className="text-center max-w-2xl lg:py-4 pt-2 mx-auto">
          Join with our partners
        </p>
        <div className="my-10">
          <SlickSlider visibleSlides={5}>
            {images.map((image, index) => (
              <div key={index} className="">
                <div className="mx-auto w-40 lg:h-40 h-28 mb-10 flex items-center justify-center">
                  <Image
                    src={image}
                    width={300}
                    height={300}
                    alt={image}
                    className="w-32 mx-auto"
                  />
                </div>
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </section>
  );
}
