import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          >
            <img
              src={client.logo}
              alt="company-logo"
              className="sm:w-[192px] w-[100px] object-contain hover:brightness-150 hover:filter hover:invert"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
