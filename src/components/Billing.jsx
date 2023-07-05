import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Billing = () => {
  const [ref, inView] = useInView({
    // triggerOnce: true,
    threshold: 0.1, // Adjust this value to control when the animation triggers
  });

  const sectionVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="product"
      className={layout.sectionReverse}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing-image"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Effortlessly manage <br className="sm:hidden" /> your billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          From effortless billing and invoicing to comprehensive financial
          control, we empower you to take charge of your finances and focus on
          what matters most – growing your business.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple-store-logo"
            className="w-[160px] h-[32px] object-contain mr-5 cursor-pointer"
          />

          <img
            src={google}
            alt="google-play-logo"
            className="w-[160px] h-[32px] object-contain mr-5 cursor-pointer"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Billing;
