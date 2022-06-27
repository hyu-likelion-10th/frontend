import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import Layout from "../components/common/Layout";
import PostCard from "../components/PostCard";
import styles from "../styles/post.module.css";
import IPost from "../interfaces/IPost";

const Post = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const savedPosts = localStorage.getItem("posts");
        if (savedPosts) { setPosts(JSON.parse(savedPosts).reverse()); }
    }, []);

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
                    {posts.map((v: IPost) => (
                        <PostCard key={v.index} index={v.index} date={v.date} title={v.title} content={v.content} />
                    ))}
                </article>  
            </section>
        </Layout>
    );
}

export default Post;