import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router";
import Layout from "../components/common/Layout";
import Header from "../components/common/Header";
import styles from "../styles/createpost.module.css";
import IPost from "../interfaces/IPost";

interface CreatePostProps {
    updateMode: boolean,
};

const CreatePost = ( { updateMode }: CreatePostProps ) => {
    const { register, handleSubmit, watch, formState: {errors}, setFocus }  = useForm();

    const [posts, setPosts] = useState<IPost[]>([]);
    const [post, setPost] = useState<IPost>({index: "", date:"", title: "", content: ""});

    const params = useParams();
    const navigate = useNavigate();

    const onSubmit = () => {
        const now = new Date();
        const form: IPost = {
            index: String(now),
            date: now.getFullYear() + "-" + String(now.getMonth()+1).padStart(2, "0") + "-" + now.getDate() +
                " " + String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0") + ":" + String(now.getSeconds()).padStart(2, "0"),
            title: watch("title"),
            content: watch("content"),
        };

        if (!updateMode)  {
            localStorage.setItem("posts", JSON.stringify([...posts, form]));        
            alert("포스트 등록이 완료되었습니다");
            navigate("/post");    
        }
        else {
            let newPosts: IPost[] = [...posts];
            newPosts.forEach((v, i) => {
                if (v.index === params.id) { newPosts.splice(i, 1, form); }
            });
            localStorage.setItem("posts", JSON.stringify(newPosts));
            alert("포스트 수정이 완료되었습니다");
            navigate("/post");
        }
    }

    useEffect(() => {
        const savedPosts = localStorage.getItem("posts");
        if (savedPosts) {
            const parsedPosts = JSON.parse(savedPosts);
            setPosts(parsedPosts);

            if (updateMode) {
                parsedPosts.forEach((v: IPost) => {
                    if (v.index === params.id) { setPost(v); }
                });
            }
        }

        setFocus("title");
    }, [params.id, setFocus, updateMode]);

    return (
        <Layout>
            <Header active="POST"/>
            <form className={styles[`create-post`]} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles[`input-div`]}>
                    <span>TITLE</span>
                    <input
                        {...register("title", {
                            required: {
                                value: true,
                                message: "🚨 제목이 없는 포스트는 등록이 불가합니다",
                            },
                            maxLength: {
                                value: 30,
                                message: "🚨 제목은 30자 이하로 작성해주세요",
                            }
                        })}
                        placeholder={"제목을 입력해주세요 :)"}
                        defaultValue={updateMode ? post.title : ""}
                    />
                </div>
                {errors.title && <p className={styles.errors}>{errors.title.message}</p>}
                <div className={styles[`input-div`]}>
                    <span>CONTENT</span>
                    <textarea 
                        {...register("content", {required: true})}
                        placeholder={"내용을 입력해주세요 :)"}
                        defaultValue={updateMode ? post.content : ""}
                    />
                </div>
                {errors.content && (!updateMode ? <p className={styles.errors}>🚨 내용이 없는 포스트는 등록이 불가합니다</p> : <p className={styles.errors}>🚨 내용을 수정해주세요</p>)}
                <div className={styles[`btn-div`]}>
                    <button className={styles.btn}>CONFIRM</button>
                </div>
            </form>
        </Layout>
    );
}

export default CreatePost;