import {demoIndex} from "./demo-index";
import {CollapsedDemo} from "./collapsed-demo";
import {docApi} from "../../../../common/api/doc-api";

export const demoCollapsed = (docLocation) => (content, sampleName) => {

    const demo = demoIndex[docLocation] && demoIndex[docLocation][sampleName];

    return {
        length: 0,
        jsx: !demo ? (
            `Error: Can not load sample [${sampleName}] in [${docLocation}]`
        ) : (
            <CollapsedDemo
                contents={[
                    {
                        name: sampleName,
                        load: () => docApi.getSampleCode(docLocation, sampleName),
                    }
                ]}
                demo={demo}
            />
        ),
    };
};