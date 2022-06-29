import React from "react";
import { Card } from "antd";
import styles from "../styles/postcard.module.css";
import IPost from "../interfaces/IPost";

const PostCard = ({ id, title, postDate, content }: IPost) => {
    return (
        <>
            <Card
                title={title}
                extra={<a href={"/detail/"+id}>More</a>}
                style={{
                    width: 300,
                }}
            >
                <p className={`${styles.gray} ${styles.sm}`}>{new Date(postDate).toLocaleString("ko-KR")}</p>
                <p className={`${styles.gray} ${styles.content}`}>{content}</p>
            </Card>
        </>
    );
}

export default PostCard;