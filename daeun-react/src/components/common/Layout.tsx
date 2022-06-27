import React from "react";
import styles from "../../styles/layout.module.css";

interface LayoutProps {
    children: React.ReactNode,
};

const Layout = ({ children }: LayoutProps) => {
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