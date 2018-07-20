import {HighlightJSX} from "../highlight/highlight";

const samples = {
    "/getting-started/introduction/": require("../content/getting-started/introduction/samples"),
};

export const demo = (docLocation) => (content, args) => {
    return {
        length: 0,
        jsx: (
            <div className="">
                <HighlightJSX code={samples[docLocation][args].content}/>

                <div className="">
                    {samples[docLocation][args].demo()}
                </div>
            </div>
        ),
    };
};