import React from "react";
import { Card } from "antd";
import styles from "../styles/postcard.module.css";

const PostCard = ({index, date, title, content}) => {
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
                <p className={styles.gray}>{content}</p>
            </Card>
        </>
    );
}

export default PostCard;