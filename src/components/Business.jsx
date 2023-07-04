import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

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
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureInfoCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
