import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:mt-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow
      `}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Give Alcar a shot today!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Expand your business horizons effortlessly with valuable insights on
          accepting card payments and fueling international growth.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 `}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
