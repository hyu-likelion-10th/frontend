import React from "react";
import { Card } from "antd";
import styles from "../styles/postcard.module.css";
import IPost from "../interfaces/IPost";

const PostCard = ({ index, date, title, content}: IPost) => {
    return (
        <>
            <Card
                title={title}
                extra={<a href={"/detail/"+index}>More</a>}
                style={{
                    width: 300,
                }}
            >
                <p className={`${styles.gray} ${styles.sm}`}>{date}</p>
                <p className={`${styles.gray} ${styles.content}`}>{content}</p>
            </Card>
        </>
    );
}

export default PostCard;