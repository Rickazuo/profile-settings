import Option from "../option/option";
import styles from "./containerOption.module.css";

export default function ContainerOption({ title, rows }) {
  return (
    <main className={styles.main}>
      <span className={styles.title}>{title}</span>
      <div className={styles.container}>
        {rows.map((row, index) => (
          <Option key={index} image={row.image} description={row.description} />
        ))}
      </div>
    </main>
  );
}
