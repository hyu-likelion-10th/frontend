import React, { useState, useEffect } from "react";
import Layout from "../components/common/Layout";
import Header from "../components/common/Header";
import styles from "../styles/createpost.module.css";

const CreatePost = ( { updateMode = false } ) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [posts, setPosts] = useState(null);

    const onConfirm = () => {
    }

    useEffect(() => {

    }, []);

    return (
        <Layout>
            <Header active="POST"/>
            {!updateMode &&
            <section className={styles[`create-post`]}>
                <article className={styles[`input-div`]}>
                    <span>TITLE</span>
                    <input
                        placeholder="제목을 입력해주세요 :)"
                        onChange={(e) => setTitle(e.target.value) }
                    />
                    <span>CONTENT</span>
                    <textarea 
                        placeholder="내용을 입력해주세요 :)"
                        onChange={(e) => setContent(e.target.value) }
                    />
                </article>
                <article className={styles[`btn-div`]}>
                    <button
                        className={styles.btn}
                        onClick={onConfirm}
                    >
                        CONFIRM
                    </button>
                </article>
            </section>
            }
        </Layout>
    );
}

export default CreatePost;