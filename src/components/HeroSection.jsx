import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const HeroSection = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const sectionVariant = {
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    hidden: { opacity: 0, scale: 0, x: 200 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <section
      id="home"
      ref={ref}
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
        >
          {" "}
          <img src={discount} width="32px" height="32px" />
          <p className={`${styles.paragraph} ml-2 `}>
            Get a <span className="text-white">25%</span> discount{" "}
            <span className="text-white">for your first month!</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-white flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block" hidden />{" "}
            <span className="text-gradient">Disruptive</span>
            {""}
          </h1>

          <div
            className="ss:flex hidden md:mr-4 mr-0
          "
          >
            <GetStarted />
          </div>
        </div>

        <h1 className="text-white font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] w-full leading-[75px]">
          Payment Solution.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px mt-5`}>
          Utilizing a specific approach, our team of specialists applies a
          methodology to determine the credit cards that are highly suitable for
          your requirements. We assess the annual percentage rates and annual
          fees.
        </p>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={control}
        variants={sectionVariant}
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="robot-hand-img"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[85%] rounded-full bottom-0 white__gradient" />
        <div className="absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </motion.div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default HeroSection;
