import { useState, useEffect } from "react";
import { marked } from "marked";
import { v4 as uuidv4 } from "uuid";

import { Title, Blockquote, Code, Image } from "@mantine/core";
import { Prism } from "@mantine/prism";
import Link from "next/link";

const Marked = ({ markdown }: { markdown: any }) => {
    const [content, setContent] = useState<any>();

    useEffect(() => {
        if (markdown) {
            const data = marked.lexer(markdown);
            const blocks = data.map((i) => generateBlocks(i));
            setContent(blocks);
        }
    }, [markdown]);

    return <>{content}</>;
};

export default Marked;

const generateBlocks = (block: any) => {
    const { type, tokens, text, depth, href, lang, ordered, items } = block;
    switch (type) {
        case "heading":
            return (
                <Title key={uuidv4()} order={depth}>
                    {text}
                </Title>
            );
        case "paragraph":
            if (tokens.every((i: any) => i.type === "image")) {
                return (
                    <div key={uuidv4()}>
                        {tokens.map((i: any) => generateBlocks(i))}
                    </div>
                );
            } else {
                return (
                    <p key={uuidv4()}>
                        {tokens.map((i: any) => generateBlocks(i))}
                    </p>
                );
            }
        case "text":
            if (tokens) {
                return (
                    <span key={uuidv4()}>
                        {tokens.map((i: any) => generateBlocks(i))}
                    </span>
                );
            } else {
                return (
                    <span key={uuidv4()}>
                        {text
                            .replaceAll("&#39;", "'")
                            .replaceAll("&gt;", ">")
                            .replaceAll("&amp;", "&")
                            .replaceAll("&quot;", '"')}
                    </span>
                );
            }
        case "link":
            return (
                <Link key={uuidv4()} href={href} passHref>
                    <a key={uuidv4()}>{text}</a>
                </Link>
            );
        case "strong":
            return <strong key={uuidv4()}>{text}</strong>;
        case "em":
            return <em key={uuidv4()}>{text}</em>;
        case "blockquote":
            return (
                <Blockquote key={uuidv4()}>
                    {tokens.map((i: any) => generateBlocks(i))}
                </Blockquote>
            );
        case "codespan":
            return (
                <Code key={uuidv4()} color="blue">
                    {text
                        .replaceAll("&#39;", "'")
                        .replaceAll("&lt;", "<")
                        .replaceAll("&gt;", ">")}
                </Code>
            );
        case "list":
            if (ordered) {
                return (
                    <ol key={uuidv4()}>
                        {items.map((i: any) => generateBlocks(i))}
                    </ol>
                );
            } else {
                return (
                    <ul key={uuidv4()}>
                        {items.map((i: any) => generateBlocks(i))}
                    </ul>
                );
            }
        case "list_item":
            return (
                <li key={uuidv4()}>
                    {tokens.map((i: any) => generateBlocks(i))}
                </li>
            );
        case "code":
            return (
                <Prism
                    key={uuidv4()}
                    withLineNumbers
                    language={lang}
                    scrollAreaComponent='div'
                >
                    {text}
                </Prism>
            );
        case "image":
            return (
                <Image key={uuidv4()} alt={text} src={href} caption={text} />
            );
        default:
            return;
    }
};
