import {HighlightJSX} from "../highlight/highlight";
import {Load} from "./load";
import {docApi} from "../../../../common/api/doc-api";
import {snippet} from "../content/validators/common/snippet";

export const code = (docLocation) => (content, arg) => {

    const [sampleName, snippetName] = arg.split(" ");

    return {
        length: 0,
        jsx: (
            <Load
                api={() => docApi.getSampleCode(docLocation, sampleName)}
                render={(content) => (
                    <HighlightJSX code={
                        snippetName != null ? (
                            snippet(content, snippetName)
                        ) : (
                            content
                        )}/>
                )}
            />
        ),
    };
};