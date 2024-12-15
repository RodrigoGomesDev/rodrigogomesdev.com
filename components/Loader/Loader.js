import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <div class="dev-symbol"></div>
        <div className={styles.symbol}></div>
        <div className={styles.progress} />
      </div>
      <div>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default Loader;
