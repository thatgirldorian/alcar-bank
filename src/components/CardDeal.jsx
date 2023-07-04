import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Unlock superior card deals <br className="sm:block hidden" /> with
          ease, in a few steps.
        </h2>
        <p className={`${styles.paragraph}  max-w-[470px] mt-5`}>
          Our user-friendly process enables you to find and unlock superior card
          offers, providing you with unmatched benefits and rewards. Start your
          journey today and experience the simplicity of securing the perfect
          card deal in just a few easy steps.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img
          src={card}
          alt="card-image"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
    </section>
  );
};

export default CardDeal;
