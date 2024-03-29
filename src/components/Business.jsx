import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

const FeatureInfoCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] cursor-pointer ${
        index !== features.length - 1
      } ? 'mb-6' : "mb-0"} feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img
          src={icon}
          alt="star-icon"
          className="w-[50%] h-[50%] object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>

        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );
};

FeatureInfoCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const Business = () => {
  const [ref, inView] = useInView({
    // triggerOnce: true,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
      id="features"
      className={layout.section}
    >
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Focus on your business, <br className="sm:block hidden" /> leave the
          finances to us.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Discover how the right credit card can transform your financial
          journey by aiding you in building credit, earning enticing rewards,
          and maximizing savings in the midst of a vast credit card landscape.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureInfoCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default Business;
