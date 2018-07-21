import {demoIndex} from "./demo-index";

export const demo = (docLocation) => (content, sampleName) => {

    const demo = demoIndex[docLocation] && demoIndex[docLocation][sampleName];

    return {
        length: 0,
        jsx: !demo ? (
            `Error: Can not load sample [${sampleName}] in [${docLocation}]`
        ) : (
            <div className="demo">
                {demo()}
            </div>
        ),
    };
};