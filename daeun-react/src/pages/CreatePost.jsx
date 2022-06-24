import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router";
import Layout from "../components/common/Layout";
import Header from "../components/common/Header";
import styles from "../styles/createpost.module.css";

const CreatePost = ( { updateMode } ) => {
    const { register, handleSubmit, watch, formState: {errors}, setFocus }  = useForm();
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    const onSubmit = () => {
        const now = new Date();
        const form = {
            index: now,
            date: now.getFullYear() + "-" + String(now.getMonth()+1).padStart(2, "0") + "-" + now.getDate(),
            title: watch("title"),
            content: watch("content"),
        };

        if (!updateMode)  {
            localStorage.setItem("posts", JSON.stringify([...posts, form]));        
            alert("포스트 등록이 완료되었습니다");
            navigate("/post");    
        }
        else {
            let newPosts = [...posts];
            newPosts.forEach((v, i) => {
                if (v.index === params.id) {
                    newPosts.splice(i, 1, form);
                }
            });
            localStorage.setItem("posts", JSON.stringify(newPosts));
            alert("포스트 수정이 완료되었습니다");
            navigate("/post");
        }
    }

    useEffect(() => {
        const savedPosts = localStorage.getItem("posts");
        if (savedPosts) {
            setPosts(JSON.parse(savedPosts));

            if (updateMode) {
                JSON.parse(savedPosts).forEach((v) => {
                    if (v.index === params.id) {
                        setPost(v);
                    }
                })    
            }
        }
        setFocus("title");
    }, []);

    return (
        <Layout>
            <Header active="POST"/>
            <form className={styles[`create-post`]} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles[`input-div`]}>
                    <span>TITLE</span>
                    <input
                        {...register("title", {required: true})}
                        placeholder={"제목을 입력해주세요 :)"}
                        defaultValue={post.title || ""}
                    />
                    
                </div>
                {errors.title && <p className={styles.errors}>🚨 제목이 없는 포스트는 등록이 불가합니다</p>}
                <div className={styles[`input-div`]}>
                    <span>CONTENT</span>
                    <textarea 
                        {...register("content", {required: true})}
                        placeholder={"내용을 입력해주세요 :)"}
                        defaultValue={post.content || ""}
                    />
                </div>
                {errors.content && <p className={styles.errors}>🚨 내용이 없는 포스트는 등록이 불가합니다</p>}
                <div className={styles[`btn-div`]}>
                    <button className={styles.btn}>CONFIRM</button>
                </div>
            </form>
        </Layout>
    );
}

export default CreatePost;