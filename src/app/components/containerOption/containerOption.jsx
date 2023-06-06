import Option from "../option/option";
import styles from "./containerOption.module.css";

export default function ContainerOption({
    title,
    rows,
    actualIndex,
    setActualIndex,
}) {
    return (
        <main className={styles.main}>
            <span className={styles.title}>{title}</span>
            <div className={styles.container}>
                {rows.map((row, index) => (
                    <div key={index}>
                        <div
                            onClick={() =>
                                actualIndex && setActualIndex(row.id)
                            }
                        >
                            <Option
                                image={row.image}
                                description={row.description}
                                className={styles.item}
                                actualIndex={actualIndex}
                            />
                        </div>
                        {actualIndex && actualIndex === row.id ? (
                            <div className={styles.dropRight}>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Ipsam, rerum unde laborum
                                fugiat esse impedit, autem cum nisi repudiandae
                                cupiditate excepturi quas nostrum officia libero
                                ex deserunt voluptatem voluptates fuga?
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>
        </main>
    );
}
