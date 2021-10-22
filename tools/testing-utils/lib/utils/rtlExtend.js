import { render as libRender } from "@testing-library/react";
import React from "react";

/**
 *  Render wrapper for default render to make working like this
 *  before: render(<App id="1">)
 *  after:  render(App, {id: 1})
 */
const render = (Component, { ...props } = {}, { ...renderOptions } = {}) => {
	const renderer = libRender(<Component {...props} />, { ...renderOptions });

	/**
	 *  Replace rerender to work with same logic
	 *  before: rerender(<App id="2">)
	 *  after:  rerender({id: 2})
	 */
	renderer.rerender = (newProps = props) => renderer.rerender(<Component {...newProps} />);

	return renderer;
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
