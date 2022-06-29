import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router";
import Layout from "../components/common/Layout";
import Header from "../components/common/Header";
import styles from "../styles/createpost.module.css";
import IPost from "../interfaces/IPost";
import IGetOnePost from "../interfaces/IGetOnePost";
import axios from "axios";

interface CreatePostProps {
    updateMode: boolean;
};

const CreatePost = ( { updateMode }: CreatePostProps ) => {
    const { register, handleSubmit, watch, formState: {errors}, setFocus }  = useForm();

    const [post, setPost] = useState<IPost>({id: -1, postDate:"", title: "", content: ""});

    const id = parseInt(useParams().id);
    const navigate = useNavigate();

    const onSubmit = async () => {
        const form = new FormData();
            form.append("title", watch("title"));
            form.append("content", watch("content"));

        try {
            if (!updateMode) {
                const { status } = await axios.post("http://52.79.216.188/blog", form);
                if (status === 201) {
                    alert("포스트 등록이 완료되었습니다");
                    navigate("/post");
                }
            }
            else {
                const { status } = await axios.put(`http://52.79.216.188/blog/${id}`, form);
                if (status === 200) {
                    alert("포스트 수정이 완료되었습니다");
                    navigate("/post");
                }
            }
        } catch (error) {
            console.log(error);
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
        setFocus("title");
    }, [id, setFocus]);

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