const samples = {
    "/getting-started/introduction/": require("../content/getting-started/introduction/samples"),
    "/getting-started/features/": require("../content/getting-started/features/samples"),
    "/api/create-by-3-ways/": require("../content/api/create-by-3-ways/samples"),
    "/validators/introduction/": require("../content/validators/introduction/samples"),
};

export const demo = (docLocation) => (content, arg) => {

    const [sampleName] = arg.split(" ");

    const demo = samples[docLocation] && samples[docLocation][sampleName];

    return {
        length: 0,
        jsx: !demo ? (
            `Error: Can not load sample [${arg}] in [${docLocation}]`
        ) : (
            <div className="demo">
                {demo()}
            </div>
        ),
    };
};