import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/header.module.css";

interface HeaderProps {
    active: string,
};

const Header = ({ active }: HeaderProps) => {
    return (
        <section className={styles.header}>
            <span className={styles[`blog-title`]}>BLOG</span>
            <article className={styles.nav}>
                <Link
                    to="/"
                    className={`${styles[`nav-item`]} ${active === "HOME" && styles.active}`}
                >
                    <span>HOME</span>
                </Link>
                <Link
                    to="/post"
                    className={`${styles[`nav-item`]} ${active === "POST" && styles.active}`}
                >
                    <span>POST</span>
                </Link>
                <Link
                    to="/contact"
                    className={`${styles[`nav-item`]} ${active === "CONTACT" && styles.active}`}
                >
                    <span>CONTACT</span>
                </Link>
            </article>
            <span className={styles[`blog-title`]}>@dianestar</span>
        </section>
    );
}

export default Header;