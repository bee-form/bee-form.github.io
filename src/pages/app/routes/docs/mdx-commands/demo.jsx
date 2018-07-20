import {HighlightJSX} from "../highlight/highlight";

const samples = {
    "/getting-started/introduction/": require("../content/getting-started/introduction/samples"),
    "/api/create-by-3-ways/": require("../content/api/create-by-3-ways/samples"),
};

export const demo = (docLocation) => (content, args) => {
    const demo = samples[docLocation] && samples[docLocation][args];
    return {
        length: 0,
        jsx: demo && (
            <div className="">
                <HighlightJSX code={demo.content}/>

                <div className="">
                    {demo.demo()}
                </div>
            </div>
        ),
    };
};