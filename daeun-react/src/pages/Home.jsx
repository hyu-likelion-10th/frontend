import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Layout from "../components/common/Layout";
import PostCard from "../components/PostCard";
import styles from "../styles/home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    require("../sources/ankko_1.jpg"),
    require("../sources/ankko_2.jpg"),
    require("../sources/ankko_3.jpg"),
    require("../sources/ankko_4.jpg"),
    require("../sources/ankko_5.jpg"),
]

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const savedPosts = localStorage.getItem("posts");
        if (savedPosts) { setPosts(JSON.parse(savedPosts).reverse().slice(0, 3)); }
    }, []);

    return (
        <Layout>
                <Header active="HOME" />
                <section className={styles.home}>
                    <Slider {...settings}>
                        {images.map((value, index) => {
                            return (
                                <div key={index}>
                                    <img className={styles[`slick-img`]} src={value} alt="main slick" />
                                </div>
                            );
                        })}
                    </Slider>
                    <article className={styles[`main-text-div`]}>
                        <span className={styles.greeting}>안녕하세요 정다은 입니다 : )</span>
                        <br/>
                        <span className={styles.hashtag}>#EDUCATIONAL_TECHNOLOGY #COMPUTER_SOFTWARE #HTML #CSS #JAVASCRIPT #REACT</span>
                        </article>
                    <article className={styles[`post-preview-div`]}>
                        {posts.map((v, i) => (
                            <PostCard key={v.index} index={v.index} date={v.date} title={v.title} content={v.content} />
                        ))}
                    </article>
                </section>
        </Layout>
    );
}

export default Home;