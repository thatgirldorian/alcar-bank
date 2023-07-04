import { feedback } from "../constants";
import styles, { layout } from "../style";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          What customers <br className="sm:block hidden" /> say about us
        </h2>

        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left w-[450px] mt-5`}>
            Empower your business to thrive globally with expert knowledge on
            accepting card payments and unlocking boundless growth
            opportunities.
          </p>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default Testimonials;
