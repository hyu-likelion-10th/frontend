import React from "react";
import Layout from "../components/common/Layout";
import Header from "../components/common/Header";
import styles from "../styles/readpost.module.css";

const ReadPost = () => {
    return (
        <Layout>
            <Header active="POST"/>
            <section className={styles[`read-post`]}>
                <article className={styles.control}>
                    <span className={styles.edit}>Edit</span>
                    <span> | </span>
                    <span className={styles.delete}>Delete</span>
                </article>
                <article className={styles.main}>
                    <p className={styles.title}>Card Title</p>
                    <p className={styles.desc}>2022-00-00 정다은</p>
                    <hr />
                    <p className={styles.content}>Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </article>
            </section>
        </Layout>
    );
}

export default ReadPost;