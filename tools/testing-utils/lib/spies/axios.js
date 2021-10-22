import * as axios from "axios";

const get = () => jest.spyOn(axios, "get");
const post = () => jest.spyOn(axios, "post");
const put = () => jest.spyOn(axios, "put");
const patch = () => jest.spyOn(axios, "patch");
const del = () => jest.spyOn(axios, "delete");
const request = () => jest.spyOn(axios, "request");
const head = () => jest.spyOn(axios, "head");
const options = () => jest.spyOn(axios, "options");
const getUri = () => jest.spyOn(axios, "getUri");

export { get, post, put, patch, del, request, head, options, getUri };
