import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import Layout from "../components/common/Layout";
import PostCard from "../components/PostCard";
import styles from "../styles/post.module.css";
import IPost from "../interfaces/IPost";
import IGetAllPosts from "../interfaces/IGetAllPosts";
import axios from "axios";

const Post = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getAllPosts = async () => {
            try {
                const {
                    data, status
                }: IGetAllPosts = await axios.get("http://52.79.216.188/blog");
                
                if (status === 200) {
                    setPosts(data.reverse());
                }
            } catch (error) {
                console.log(error);
            }
        }
        getAllPosts();
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
                        <PostCard key={v.id} id={v.id} postDate={v.postDate} title={v.title} content={v.content} />
                    ))}
                </article>  
            </section>
        </Layout>
    );
}

export default Post;