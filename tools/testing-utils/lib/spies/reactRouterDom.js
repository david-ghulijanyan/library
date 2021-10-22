import * as reactRouterDom from "react-router-dom";

// Hooks
const useParams = () => jest.spyOn(reactRouterDom, "useParams");

export { useParams };
