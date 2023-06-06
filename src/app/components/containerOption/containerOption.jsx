import Option from "../option/option";
import styles from "./containerOption.module.css";
import { useState } from "react";

export default function ContainerOption({ title, rows }) {
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const [actualIndex, setActualIndex] = useState(-1);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };

    console.log(hoveredIndex);
    return (
        <main className={styles.main}>
            <span className={styles.title}>{title}</span>
            <div className={styles.container}>
                {rows.map((row, index) => (
                    <div key={index}>
                        <div
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => setActualIndex(index)}
                        >
                            <Option
                                image={row.image}
                                description={row.description}
                                className={styles.item}
                            />
                        </div>
                        {hoveredIndex === index || actualIndex === index ? (
                            <div className={styles.dropRight}>ooi</div>
                        ) : null}
                    </div>
                ))}
            </div>
        </main>
    );
}
