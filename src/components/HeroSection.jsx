import styles from "../style";
import { discount, robot } from "../assets";

const HeroSection = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px]`}
        >
          {" "}
          <img src={discount} width="32px" height="32px" />
          <p className={`${styles.paragraph} ml-2 `}>
            Get a <span className="text-white">25%</span> discount{" "}
            <span className="text-white">for your first month!</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-white flex-1 font-poppins font-semibold ss:text-[72px] text:[52px] ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block" hidden />{" "}
            <span className="text-gradient">Cutting-edge</span> <br />
            Payment Solution.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
