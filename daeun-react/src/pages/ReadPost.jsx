import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/common/Layout";
import Header from "../components/common/Header";
import styles from "../styles/readpost.module.css";

const ReadPost = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});

    const onDelete = () => {
        if (window.confirm("삭제하시겠습니까?")) {
            let newPosts = posts.filter((v) => v.index !== post.index);
            localStorage.setItem("posts", JSON.stringify(newPosts));
            navigate("/post");
        }
    }

    useEffect(() => {
        const savedPosts = localStorage.getItem("posts");
        if (savedPosts) {
            const parsedPosts = JSON.parse(savedPosts);
            setPosts(parsedPosts);
            parsedPosts.forEach((v) => {
                if (v.index === params.id) { setPost(v); }
            })
        }
    }, []);

    return (
        <Layout>
            <Header active="POST"/>
            <section className={styles[`read-post`]}>
                <article className={styles.control}>
                    <span className={styles.edit} onClick={() => navigate(`/edit/${params.id}`)}>Edit</span>
                    <span> | </span>
                    <span className={styles.delete} onClick={onDelete}>Delete</span>
                </article>
                <article className={styles.main}>
                    <p className={styles.title}>{post.title}</p>
                    <p className={styles.desc}>{post.date}</p>
                    <hr />
                    <p className={styles.content}>{post.content}</p>
                </article>
            </section>
        </Layout>
    );
}

export default ReadPost;