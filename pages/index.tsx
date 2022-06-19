import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import getContent from "../utils/getContent";

import Logo from "../components/Logo";
import Marked from "../components/Marked";
import HeroText from "../components/HeroText";
import GitHubCorner from "../components/GitHubCorner";

interface PageProps {
    content: any;
}

const Home: NextPage<PageProps> = ({ content }) => {
    return (
        <>
            <section className={styles.logo}>
                <Logo />
            </section>
            <section className={styles.section}>
                <Marked markdown={content.introduction} />
            </section>
            <section className={styles.section}>
                <HeroText />
            </section>
            <section className={styles.section}>
                <Marked markdown={content["targeting-element"]} />
            </section>
            <GitHubCorner href='hectorsosa.me' />;
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
