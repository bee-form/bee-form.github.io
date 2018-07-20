import {HighlightJSX} from "../highlight/highlight";

export const jsx = (docLocation) => (content) => {
    const m1 = /```(.*?)\r?\n/.exec(content);
    const start = m1.index + m1[0].length;
    const end = content.indexOf("```", start);
    return ({
        length: end + 3,
        jsx: (
            <HighlightJSX code={content.substring(start, end)}/>
        )
    });
};