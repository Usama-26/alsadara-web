import { useAnimate } from "framer-motion";
import { useInView } from "framer-motion";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  {
    title: "Projects Completed",
    number: 176,
  },
  {
    title: "Happy Clients",
    number: 1750,
  },
  {
    title: "Qualified Staff",
    number: 230,
  },
  {
    title: "Man Save Hours",
    number: 30,
  },
  {
    title: "Countries",
    number: 6,
  },
];
export default function Stats() {
  return (
    <motion.div className="lg:pt-0 stats-bg">
      <div className="bg-gray-900/70">
        <div className="constrained-padded">
          <div className="py-8 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:gap-0 gap-8 text-white text-center">
            {stats.map((stat, index) => (
              <AnimatedStat key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AnimatedStat({ stat, index }) {
  const count = useMotionValue(0);
  const [scope, animate] = useAnimate();
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { type: "spring", duration: 1, delay: i * 0.1 },
    }),
    hidden: { y: 20, opacity: 0 },
  };

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, stat.number, { duration: 2 });

      return controls.stop;
    }
  }, [isInView, count, stat.number, animate]);

  return (
    <motion.div
      initial={"hidden"}
      variants={variants}
      custom={index}
      viewport={{
        once: true,
      }}
      ref={ref}
      whileInView={"visible"}
      className="flex items-center justify-center gap-4"
    >
      <div>
        <motion.h1 className="font-display text-4xl">{rounded}</motion.h1>
        <h6 className=" text-sm">{stat.title}</h6>
      </div>
    </motion.div>
  );
}
