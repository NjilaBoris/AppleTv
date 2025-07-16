import React, { useRef } from "react";
import Container from "../layouts/Container";
import Button from "../layouts/Button";
import { motion, useScroll, useTransform } from "motion/react";

const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  return (
    <div className="h-[300vh] relative bg-primary text-secondary">
      <motion.div
        style={{ opacity }}
        className="-top-[---header-height] left-0 w-full h-[200vh] absolute"
        ref={videoContainerRef}
      >
        <img
          src="https://images.unsplash.com/photo-1605811784653-ee4e230bd981?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFwb2xlb258ZW58MHx8MHx8fDA%3D"
          alt="appletv"
          className="w-full sticky top-0 h-screen object-cover "
        />
      </motion.div>

      <Container className="relative z-10 h-[100svh] !pb-7">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.9 }}
          className="flex h-full flex-col justify-end gap-1.5 items-start"
        >
          <h1 className="!mb-10 text-4xl font-bold md:text-5xl">
            All Apple Originals. <br />
            Only on Apple TV+.
          </h1>
          <Button className="!mb-16" size="large">
            Stream now
          </Button>
          <p className="font-bold">Watch on the 📺 app.</p>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
