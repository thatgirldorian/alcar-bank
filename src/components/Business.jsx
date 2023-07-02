import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Business = () => {
  return (
    <section id="features" className={layout.section}>
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
        <Button />
      </div>
    </section>
  );
};

export default Business;
