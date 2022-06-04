import React from "react";
import styles from "../../styles/layout.module.css";

const Layout = ({ children }) => {
    return (
        <section className={styles.bg}>
            <article className={styles.wrapper}>
                {children}
                <section className={styles.footer}>
                    <span>HYU LIKELION | FRONTEND | CHUNG DA EUN</span>
                </section>
            </article>
        </section>
    );
}

export default Layout;