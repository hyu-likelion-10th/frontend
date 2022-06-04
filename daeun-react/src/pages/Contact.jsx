import React from "react";
import Header from "../components/common/Header";
import Layout from "../components/common/Layout"
import Info from "../components/Info";
import styles from "../styles/contact.module.css";
import ProfileImg from "../sources/profile_img.png";

const info = [
    {
        src: require("../sources/mail.png"),
        type: "E-MAIL",
        href: "mailto:dianestar@naver.com",
        text: "dianestar@naver.com",
    },
    {
        src: require("../sources/github.png"),
        type: "Github",
        href: "https://github.com/dianestar",
        text: "https://github.com/dianestar",
    },
    {
        src: require("../sources/blogger-logotype.png"),
        type: "Blog",
        href: "https://velog.io/@dianestar",
        text: "https://velog.io/@dianestar",
    },
    {
        src: require("../sources/instagram.png"),
        type: "Instagram",
        href: "https://www.instagram.com/dyanii_daeun/",
        text: "@dyanii_daeun",
    },
];

const Contact = () => {
    return (
        <Layout>
            <Header active="CONTACT" />
            <section className={styles.contact}>
                <article className={styles[`namecard-left-div`]}>
                    <img className={styles[`profile-img`]} src={ProfileImg} alt="contact type"/>
                </article>
                <article className={styles[`namecard-right-div`]}>
                    {info.map((value, index) => {
                        return (
                            <Info key={index} src={value.src} type={value.type} href={value.href} text={value.text} />
                        );
                    })}
                </article>
            </section>
        </Layout>
    );
};

export default Contact;