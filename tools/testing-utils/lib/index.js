import * as jestDom from "@testing-library/jest-dom";
import * as reactHooks from "@testing-library/react-hooks";
import * as userEvent from "@testing-library/user-event";
import * as api from "./api";
// import * as data from "./data";
import * as mocks from "./mocks";
import * as spies from "./spies";
import * as utils from "./utils";

const { react } = utils;

const def = {
	api,
	// data,
	mocks,
	spies,
	...utils,
	jestDom,
	reactHooks,
	userEvent,
};

export default def;

export { api, mocks, spies, react, jestDom, reactHooks, userEvent };
