import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import Layout from "../components/common/Layout";
import styles from "../styles/post.module.css";

const Post = () => {
    const navigate = useNavigate();
    return (
        <Layout>
            <Header active="POST" />
            <section className={styles.post}>
                <article className={styles[`post-btn-div`]}>
                    <button
                        className={styles.btn}
                        onClick={() => {
                            navigate("/create");
                        }}
                    >
                        NEW POST
                    </button>
                </article>
                <article className={styles[`post-cards-div`]}>
                </article>  
            </section>
        </Layout>
    );
}

export default Post;