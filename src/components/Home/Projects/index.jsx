import { ProjectCard } from "@/components/Card";

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

export default function OurProjects() {
  return (
    <section className="my-20">
      <div className="constrained-padded">
        <div className="space-y-2">
          <h6 className="text-center text-primary-light font-display">
            Our Projects
          </h6>
          <h1 className="font-display lg:text-3xl text-xl text-center capitalize">
            Have a Look at Our Projects
          </h1>
          <p className="text-center max-w-2xl  mx-auto text-sm lg:text-base">
            {
              "Explore our portfolio of innovative projects, showcasing our expertise, creativity, and the impactful solutions we've delivered to different businesses like yours."
            }
          </p>
        </div>
        <div className="my-10">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
