import { setupWorker } from "msw";

const worker = (handlers = []) => setupWorker(...handlers);

export default worker;
