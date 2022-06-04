import React from "react";
import styles from "../styles/contact.module.css";

const Info = ({ src, type, href, text }) => {
    return (
        <section className={styles[`contact-wrapper-div`]}>
            <article className={styles[`contact-type-div`]}>
                <img className={styles[`contact-img`]} src={src}/>
                <span className={styles[`contact-text`]}>{type}</span>
            </article>
            <a className={styles[`contact-info`]} href={href} target="_blank">{text}</a>
        </section>
    );
}

export default Info;