import fs from "fs";
import path from "path";

const getContent = () => {
    const files = fs.readdirSync(path.join("content"));

    const content: any = {};

    files.map((file: any) => {
        try {
            const data = fs.readFileSync(path.join("content", file), "utf8");
            content[file.replace(".md", "")] = data;
        } catch (error) {
            console.log(error);
        }
    });

    return content;
}

export default getContent;