import React from "react";
import { Card } from "antd";
import styles from "../styles/postcard.module.css";

const PostCard = ({title, content}) => {
    return (
        <>
            <Card
                title={title}
                extra={<a href="#">More</a>}
                style={{
                    width: 300,
                }}
            >
                <p className={`${styles.gray} ${styles.sm}`}>날짜? 작성자?</p>
                <p className={styles.gray}>{content}</p>
            </Card>
        </>
    );
}

export default PostCard;