import { setupServer } from "msw/node";

const server = (handlers = []) => setupServer(...handlers);

export default server;
