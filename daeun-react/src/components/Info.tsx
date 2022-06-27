import React from "react";
import styles from "../styles/contact.module.css";

export interface InfoProps {
    src: string,
    type: string,
    href: string,
    text: string,
}

const Info = (props: InfoProps) => {
    return (
        <section className={styles[`contact-wrapper-div`]}>
            <article className={styles[`contact-type-div`]}>
                <img className={styles[`contact-img`]} src={props.src} alt="type"/>
                <span className={styles[`contact-text`]}>{props.type}</span>
            </article>
            <a className={styles[`contact-info`]} href={props.href} target="_blank" rel="noreferrer">{props.text}</a>
        </section>
    );
}

export default Info;