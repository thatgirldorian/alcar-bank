import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

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
            <span className="text-gradient">Disruptive</span>
            {""}
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0 ">
            <GetStarted />
          </div>
        </div>

        <h1 className="text-white font-poppins font-semibold ss:text-[68px] text:[52px] ss:leading-[100px] w-full leading-[75px]">
          Payment Solution.
        </h1>

        <p>
          Utilizing a specific approach, our team of specialists applies a
          methodology to determine the credit cards that are highly suitable for
          your requirements. We assess the annual percentage rates and annual
          fees.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
