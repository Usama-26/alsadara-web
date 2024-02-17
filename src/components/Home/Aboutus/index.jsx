import useIntersection from "@/hooks/useIntersection";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs({}) {
  const isIntersecting = useIntersection("aboutUs", 0.1);
  console.log(isIntersecting);
  return (
    <section id="aboutUs" className="relative">
      <div className="bg-gray-100 constrained-padded w-full rounded-xl shadow-lg p-6 -translate-y-24">
        <div className="py-4 flex lg:flex-row flex-col gap-6">
          <div className="basis-3/5">
            <div className="text-primary space-y-2">
              <h6 className="text-primary">About us</h6>
              <h1 className="text-primary font-display lg:text-3xl text-2xl">
                Welcome to alsadara
              </h1>
              <span className="inline-block border-b border-t-4 border-primary w-10 h-1"></span>
              <p className="font-display lg:text-lg">
                Providing best industrial solution for our customers <br />{" "}
                business growing in last 11+ years.
              </p>
            </div>
            <div className="space-y-2 my-4 text-sm">
              <p>
                alsadara is a premier provider of Energy & Facilities Management
                solutions, committed to delivering performance-based services
                that assist clients in achieving their financial, operational,
                and environmental objectives.
              </p>
              <p>
                The firm, established in 2013 by a team of experienced
                engineers, originated in Egypt, offering energy solutions and
                advisory services to hotels, resorts, and high-rises
              </p>
              <p>
                In 2018, we extended our services to Saudi Arabia, India
                positioning us as a leading engineering services provider and
                solutions creator.
              </p>
            </div>
            <Link
              href={"#"}
              className="rounded-full px-6 py-2 text-white bg-primary-light font-display"
            >
              Read More
            </Link>
          </div>
          <div className="basis-2/5 relative">
            <Image
              src={"/images/home/aboutus/image-1.jpg"}
              width={498}
              height={327}
              alt="About us Image 1"
              className="ml-auto relative rounded-xl"
            />
            <Image
              src={"/images/home/aboutus/image-2.jpg"}
              width={362}
              height={238}
              alt="About us Image 2"
              className=" rounded-xl relative bottom-0"
            />
            <div className="rounded-xl py-2 px-2 w-1/4 block ml-auto relative text-center text-white bg-primary">
              <span className="font-bold lg:text-2xl font-display">11+</span>
              <p className="lg:text-base text-sm">Years of experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
