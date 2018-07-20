import {HighlightJSX} from "../highlight/highlight";

const samples = {
    "/getting-started/introduction/": require("../content/getting-started/introduction/samples"),
    "/api/create-by-3-ways/": require("../content/api/create-by-3-ways/samples"),
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