import {HighlightJSX} from "../highlight/highlight";
import {CollapsedDemo} from "./collapsed-demo";

const samples = {
    "/getting-started/introduction/": require("../content/getting-started/introduction/samples"),
    "/getting-started/features/": require("../content/getting-started/features/samples"),
    "/api/create-by-3-ways/": require("../content/api/create-by-3-ways/samples"),
    "/validators/introduction/": require("../content/validators/introduction/samples"),
};

export const demo = (docLocation) => (content, arg) => {

    const [sampleName, ...args] = arg.split(" ");

    const sample = samples[docLocation] && samples[docLocation][sampleName];

    return {
        length: 0,
        jsx: !sample ? (
            `Error: Can not load sample [${arg}] in [${docLocation}]`
        ) : args.indexOf("collapsed") > -1 ? (
            <CollapsedDemo
                sample={sample}
            />
        ) : (
            <div className="">
                <HighlightJSX code={sample.content}/>

                <div className="demo">
                    {sample.demo()}
                </div>
            </div>
        ),
    };
};