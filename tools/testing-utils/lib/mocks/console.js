const log = data => jest.spyOn(console, "log").mockReturnValue(data);
const error = data => jest.spyOn(console, "error").mockReturnValue(data);
const warn = data => jest.spyOn(console, "warn").mockReturnValue(data);
const info = data => jest.spyOn(console, "info").mockReturnValue(data);

export { log, error, warn, info };
