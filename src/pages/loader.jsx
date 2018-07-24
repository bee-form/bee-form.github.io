import {PagesApp} from "./app/pages-app";
import {apiConfig} from "./common/api/api";
import {AsyncUtil} from "./common/utils/async-util";
import {CachedFetcher} from "./common/api/cached-fetcher";
import ReactDOM from "react-dom";
import React from "react";
import {FetcherFactory} from "./common/api/fetcher-factory";

let fetcher = FetcherFactory.createFetcher({});

let cachedGets = window.cached_gets;
delete window.cached_gets;

AsyncUtil.resolveToMap(cachedGets, fetcher.get).then((cachedGets) => {
    apiConfig.setFetcher(CachedFetcher.createCachedFetcher(
        fetcher,
        cachedGets
    ));

    ReactDOM.hydrate((
        <PagesApp />
    ), document.getElementById("app-container"));

});


