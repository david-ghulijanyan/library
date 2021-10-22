const log = () => jest.spyOn(console, "log");
const error = () => jest.spyOn(console, "error");
const warn = () => jest.spyOn(console, "warn");
const info = () => jest.spyOn(console, "info");

export { log, error, warn, info };
