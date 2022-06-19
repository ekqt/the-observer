import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import getContent from "../utils/getContent";

import Logo from "../components/Logo";
import Marked from "../components/Marked";
import HeroText from "../components/HeroText";
import GitHubCorner from "../components/GitHubCorner";

import { showNotification } from "@mantine/notifications";
import { AiOutlineHeart } from "react-icons/ai";

import { useRef, useEffect, useState } from "react";

interface PageProps {
    content: any;
}

const Home: NextPage<PageProps> = ({ content }) => {
    const [visible, setVisible] = useState(false);
    const campaignRef = useRef(null);

    useEffect(() => {
        if (visible) {
            showNotification({
                autoClose: 4000,
                title: "Hi, there! Enjoying the demo?",
                message: "Check out the GitHub repo for more!",
                color: "red",
                icon: <AiOutlineHeart />,
            });
        }
    }, [visible]);

    useEffect(() => {
        const observerCallback = (entries: any) => {
            entries.map((i: any) => {
                i.isIntersecting ? setVisible(true) : setVisible(false);
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            rootMargin: "-50% 0% -50% 0%",
        });
        campaignRef.current && observer.observe(campaignRef.current);
    }, []);

    return (
        <>
            <section className={styles.logo}>
                <Logo />
            </section>
            <section className={styles.section}>
                <Marked markdown={content.introduction} />
            </section>
            <section
                id='campaign'
                ref={campaignRef}
                className={`${styles.section} ${
                    visible && styles["gradient-border"]
                }`}
            >
                <HeroText />
            </section>
            <section className={styles.section}>
                <Marked markdown={content["targeting-element"]} />
            </section>
            <section className={styles.section}>
                <Marked markdown={content["demo-explanation"]} />
            </section>
            <GitHubCorner href='https://github.com/ekqt/the-observer' />
        </>
    );
};

export default Home;

export async function getStaticProps() {
    const content = getContent();

    return {
        props: {
            content,
        },
    };
}
