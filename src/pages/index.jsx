import { ProjectCard } from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SlickSlider from "@/components/SlickSlider";
import { Stats } from "@/components/Stats";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaArrowLeft,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const projects = [
  {
    name: "Jubail 2020",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non leo quis purus semper cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Riyadh 2021",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non leo quis purus semper cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Makkah 2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non leo quis purus semper cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const images = [
  "/images/partners/partner-1.png",
  "/images/partners/partner-2.png",
  "/images/partners/partner-3.png",
  "/images/partners/partner-4.png",
  "/images/partners/partner-5.png",
];

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Stats />
      <Services />
      <WhyChooseUs />
      <OurProjects />
      <OurPartners />
      <CTA />
      <Footer />
    </>
  );
}

function Hero({}) {
  return (
    <section className="relative">
      <Image
        src={"/images/home/hero.jpg"}
        width={1440}
        height={830}
        alt="Hero Image"
        className="absolute h-screen w-screen -z-10"
      />
      <div className="z-10 constrained-padded">
        <div className="flex justify-between items-center py-10">
          <Image
            src={"/alsadarah-logo.png"}
            width={426}
            height={162}
            alt="Alsadarah Logo"
            className="w-32"
          />
          <Navbar />
        </div>
        <div className="flex gap-x-3">
          <button
            type="button"
            className="p-3 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
          >
            <FaArrowLeft />
          </button>
          <button
            type="button"
            className="p-3 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="flex justify-between my-10">
          <div className="text-white space-y-6">
            <h1 className="font-display font-bold  text-5xl leading-tight">
              <b className="text-primary">alsadara</b> power <br />
              solutions
            </h1>
            <p>
              We deliver top-notch expertise in every project, meeting minimum{" "}
              <br />
              standards as fundamental client commitments.
            </p>
            <Link
              className="inline-flex items-center gap-x-2 px-6 py-2 rounded-full border border-gray-100 hover:bg-gray-100/10 text-gray-100 transition-colors group"
              href={"#"}
            >
              <span>Contact Us</span>
              <span className="group-hover:translate-x-3 transition-all">
                <FaArrowRight />
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-y-3">
            <button
              type="button"
              className="p-3 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
            >
              <FaXTwitter />
            </button>
            <button
              type="button"
              className="p-3 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
            >
              <FaLinkedinIn />
            </button>
            <button
              type="button"
              className="p-3 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
            >
              <FaInstagram />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutUs({}) {
  return (
    <section className="h-48 mb-96 relative">
      <div className="bg-gray-100 constrained-padded w-full absolute rounded-xl shadow-lg p-6 left-1/2 -translate-x-1/2">
        <div className="py-4 flex gap-6">
          <div className="basis-3/5">
            <div className="text-primary space-y-2">
              <h6 className="text-primary">About us</h6>
              <h1 className="text-primary font-display text-3xl">
                Welcome to alsadara
              </h1>
              <span className="inline-block border-b border-t-4 border-primary w-10 h-1"></span>
              <p className="font-display text-lg">
                Providing best industrial solution for our customers <br />{" "}
                business growing in last 11+ years.
              </p>
            </div>
            <div className="space-y-2 my-4">
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
              className="ml-auto w-11/12 relative rounded-xl"
            />
            <Image
              src={"/images/home/aboutus/image-2.jpg"}
              width={362}
              height={238}
              alt="About us Image 2"
              className="w-2/3 rounded-xl -mt-20 relative bottom-0"
            />
            <div className="rounded-xl py-2 px-2 w-1/4 -mt-28 block ml-auto relative text-center text-white bg-primary">
              <span className="font-bold text-2xl font-display">11+</span>
              <p>Years of experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({}) {
  return (
    <section className="py-20">
      <div className="constrained-padded">
        <div className="services-bg">
          <div className="bg-primary/90 py-10 px-4 text-white">
            <div className="grid grid-cols-3 text-sm">
              <div className="px-12 py-4 border-b border-r border-gray-400">
                <div className="space-y-4">
                  <h1 className="font-display font-bold text-2xl uppercase tracking-wider">
                    Services
                  </h1>
                  <span className="inline-block border-b border-t-4 border-white w-10 h-1"></span>
                  <p className="text-gray-200 leading-relaxed">
                    Over 24 years experience & knowledge of international
                    industrial systems, dedicated to provide the best economical
                    solutions.
                  </p>
                  <div>
                    <Link
                      href={"#"}
                      className="group tracking-wider font-bold uppercase inline-flex gap-x-2 items-center"
                    >
                      <span>View All Services</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-12 py-4 border-b border-r border-gray-400">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Image
                      src={"/icons/services/bolt.svg"}
                      width={100}
                      height={100}
                      alt="Power System Studies Logo"
                      className="w-10 h-10"
                    />
                    <h1 className="text-2xl font-bold text-gray-600">01</h1>
                  </div>
                  <h2 className="font-display font-bold text-lg ">
                    Power System Studies
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    Denouncing pleasure and praising pain was born give you a
                    complete...
                  </p>
                  <div>
                    <Link
                      href={"#"}
                      className="group tracking-wider inline-flex gap-x-2 items-center"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-12 py-4 border-b border-gray-400">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Image
                      src={"/icons/services/config.svg"}
                      width={100}
                      height={100}
                      alt="Facility 
                        Management Logo"
                      className="w-10 h-10"
                    />
                    <h1 className="text-2xl font-bold text-gray-600">02</h1>
                  </div>
                  <h2 className="font-display font-bold text-lg ">
                    Facility Management
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    Denouncing pleasure and praising pain was born give you a
                    complete...
                  </p>
                  <div>
                    <Link
                      href={"#"}
                      className="group tracking-wider inline-flex gap-x-2 items-center"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-12 py-4 border-r border-gray-400">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Image
                      src={"/icons/services/capacitor.svg"}
                      width={100}
                      height={100}
                      alt="Facility 
                        Management Logo"
                      className="w-10 h-10"
                    />
                    <h1 className="text-2xl font-bold text-gray-600">03</h1>
                  </div>
                  <h2 className="font-display font-bold text-lg ">
                    Operation & Maintenance Solution
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    Denouncing pleasure and praising pain was born give you a
                    complete...
                  </p>
                  <div>
                    <Link
                      href={"#"}
                      className="group tracking-wider inline-flex gap-x-2 items-center"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-12 py-4 border-r border-gray-400">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Image
                      src={"/icons/services/cog.svg"}
                      width={100}
                      height={100}
                      alt="Facility 
                        Management Logo"
                      className="w-10 h-10"
                    />
                    <h1 className="text-2xl font-bold text-gray-600">04</h1>
                  </div>
                  <h2 className="font-display font-bold text-lg ">
                    MEP Solution
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    Denouncing pleasure and praising pain was born give you a
                    complete...
                  </p>
                  <div>
                    <Link
                      href={"#"}
                      className="group tracking-wider inline-flex gap-x-2 items-center"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-12 py-4 border-gray-400">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Image
                      src={"/icons/services/electric-points.svg"}
                      width={100}
                      height={100}
                      alt="Facility 
                        Management Logo"
                      className="w-10 h-10"
                    />
                    <h1 className="text-2xl font-bold text-gray-600">05</h1>
                  </div>
                  <h2 className="font-display font-bold text-lg ">
                    Electrical Installation
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    Denouncing pleasure and praising pain was born give you a
                    complete...
                  </p>
                  <div>
                    <Link
                      href={"#"}
                      className="group tracking-wider inline-flex gap-x-2 items-center"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs({}) {
  return (
    <section>
      <div className="constrained-padded">
        <h1 className="font-display text-3xl text-center">
          Why Choose Alsadara
        </h1>
        <div className="my-10">
          <div className="flex">
            <div className="basis-1/2">
              <div className="">
                <Image
                  src={"/images/whychooseus/engineer.png"}
                  width={450}
                  height={604}
                  alt="Why Choose Us Image"
                  className="w-96 mx-auto rounded-[2rem]"
                />
              </div>
            </div>
            <div className="basis-1/2">
              <div className="flex">
                <div className="basis-1/6 mr-4 flex-shrink-0">
                  <Image
                    src={"/icons/fast-delivery.svg"}
                    width={100}
                    height={100}
                    alt="Fast Delivery Logo"
                    className="w-16 h-16 ml-auto"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-primary text-primary my-4">
                    Punctual Delivery Time
                  </h4>
                  <p className="mt-1 text-sm text-gray-700 text-justify">
                    At alsadara, punctuality is at the core of our service
                    commitment. We consistently meet and exceed deadlines,
                    ensuring prompt delivery of your valuable projects. Trust
                    alsadara for reliable and timely service that fosters
                    lasting client satisfaction.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="basis-1/6 mr-4 flex-shrink-0">
                  <Image
                    src={"/icons/quality-service.svg"}
                    width={100}
                    height={100}
                    alt="Fast Delivery Logo"
                    className="w-12 h-12 ml-auto"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-primary text-primary my-4">
                    Quality Work
                  </h4>
                  <p className="mt-1 text-sm text-gray-700 text-justify">
                    At alsadara, we embody quality work as our signature. Our
                    commitment to precision and dedication ensures that every
                    project surpasses expectations, delivering an unmatched
                    standard of excellence.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="basis-1/6 mr-4 flex-shrink-0">
                  <Image
                    src={"/icons/shield-check.svg"}
                    width={100}
                    height={100}
                    alt="Fast Delivery Logo"
                    className="w-10 h-10 ml-auto mt-4"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-primary text-primary my-4">
                    Safety
                  </h4>
                  <p className="mt-1 text-sm text-gray-700 text-justify">
                    Safety is our top priority. At alsadara, we adhere to
                    rigorous standards, implementing comprehensive measures to
                    ensure the well-being of our team and clients. Your security
                    is our commitment.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="basis-1/6 mr-4 flex-shrink-0">
                  <Image
                    src={"/icons/workers-group.svg"}
                    width={100}
                    height={100}
                    alt="Fast Delivery Logo"
                    className="w-12 h-12 ml-auto mt-2"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-primary text-primary my-4">
                    Team of Professionals
                  </h4>
                  <p className="mt-1 text-sm text-gray-700 text-justify">
                    Our success is driven by a dedicated team of professionals.
                    With expertise across various domains, we are committed to
                    delivering exceptional results, ensuring your satisfaction
                    with every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurProjects() {
  return (
    <section className="my-20">
      <div className="constrained-padded">
        <h6 className="text-center text-primary-light font-display">
          Our Projects
        </h6>
        <h1 className="font-display text-3xl text-center capitalize">
          Have a Look at Our Projects
        </h1>
        <p className="text-center max-w-2xl py-4 mx-auto">
          {
            "Explore our portfolio of innovative projects, showcasing our expertise, creativity, and the impactful solutions we've delivered to different businesses like yours."
          }
        </p>
        <div className="my-10">
          <div className="grid grid-cols-3 gap-x-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OurPartners() {
  return (
    <section className="my-20">
      <div className="constrained-padded">
        <h1 className="font-display text-3xl text-center capitalize">
          Our Trusted Partners
        </h1>
        <p className="text-center max-w-2xl py-4 mx-auto">
          Join with our partners
        </p>
        <div className="my-10">
          <SlickSlider visibleSlides={5}>
            {images.map((image, index) => (
              <div key={index} className="">
                <div className="mx-auto w-40 h-40 mb-10 flex items-center justify-center">
                  <Image
                    src={image}
                    width={300}
                    height={300}
                    alt={image}
                    className="w-32 mx-auto shadow-md"
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

function CTA({}) {
  return (
    <section className="my-10 translate-y-40">
      <div className="constrained-padded flex  ">
        <div className="basis-1/2 shadow-lg rounded-l-3xl">
          <Image
            src={"/images/contactus/contactus.jpg"}
            width={650}
            height={800}
            alt="Contact Us"
            className=" rounded-l-3xl"
          />
        </div>
        <div className="basis-1/2 bg-gray-100 rounded-r-3xl shadow-lg">
          <div className="py-6">
            <h1 className="font-display text-3xl text-center capitalize">
              Get in Touch
            </h1>
            <form className="px-8 my-4 space-y-4 ">
              <input
                type="text"
                name="full_name"
                id="fullName"
                placeholder="Full Name"
                className="w-full rounded-full py-4 px-6 border border-gray-200 bg-white "
              />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone"
                className="w-full rounded-full py-4 px-6 border border-gray-200 bg-white "
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="w-full rounded-full py-4 px-6 border border-gray-200 bg-white "
              />
              <select
                name="subject"
                id="subject"
                placeholder="Subject"
                className="w-full rounded-full py-4 px-6 border border-gray-200 bg-white "
              >
                <option value="select">Subject</option>
              </select>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                rows={10}
                className="w-full rounded-2xl px-6 py-4 border border-gray-200 bg-white resize-none "
              />
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block font-bold rounded-full bg-primary-light text-white p-4 px-8 mx-auto tracking-wider"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
