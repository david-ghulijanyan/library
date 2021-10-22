import * as reactRouterDom from "react-router-dom";

// Hooks
const useParams = data => jest.spyOn(reactRouterDom, "useParams").mockReturnValue(data);

export { useParams };
