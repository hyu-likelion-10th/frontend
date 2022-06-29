import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/common/Layout";
import Header from "../components/common/Header";
import styles from "../styles/postdetail.module.css";
import IPost from "../interfaces/IPost";
import IGetOnePost from "../interfaces/IGetOnePost";
import axios from "axios";

const PostDetail = () => {
    const id = parseInt(useParams().id);
    const navigate = useNavigate();

    const [post, setPost] = useState<IPost>({id: -1, postDate:"", title: "", content: ""});

    const onDelete = async () => {
        if (window.confirm("삭제하시겠습니까?")) {
            try {
                const { status } = await axios.delete(`http://52.79.216.188/blog/${id}`);
                if (status === 204) {
                    alert("삭제되었습니다");
                    navigate("/post");
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        const getOnePost = async () => {
            try {
                const {
                    data, status
                }: IGetOnePost = await axios.get(`http://52.79.216.188/blog/${id}`);

                if (status === 200) {
                    setPost(data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getOnePost();
    }, [id]);

    return (
        <Layout>
            <Header active="POST"/>
            <section className={styles[`read-post`]}>
                <article className={styles.control}>
                    <span className={styles.edit} onClick={() => navigate(`/edit/${id}`)}>Edit</span>
                    <span> | </span>
                    <span className={styles.delete} onClick={onDelete}>Delete</span>
                </article>
                <article className={styles.main}>
                    <p className={styles.title}>{post.title}</p>
                    <p className={styles.desc}>{new Date(post.postDate).toLocaleString("ko-KR")}</p>
                    <hr />
                    <p className={styles.content}>{post.content}</p>
                </article>
            </section>
        </Layout>
    );
}

export default PostDetail;