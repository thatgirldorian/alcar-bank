import { clients } from "../constants";
import styles from "../style";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Clients = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    // triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: i * 0.2,
          duration: 0.4,
        },
      }));
    } else {
      controls.start(() => ({
        opacity: 0,
        x: -100,
      }));
    }
  }, [controls, inView]);

  return (
    <section className={`${styles.flexCenter} sm:mt-0 sm:mb-8 my-4 `}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client, index) => (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={controls}
            custom={index}
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          >
            <motion.img
              src={client.logo}
              alt="company-logo"
              className="sm:w-[192px] w-[100px] object-contain hover:brightness-200 hover:filter hover:invert"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
