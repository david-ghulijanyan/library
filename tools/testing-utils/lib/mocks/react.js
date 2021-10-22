import * as react from "react";

// Hooks
const useState = data => jest.spyOn(react, "useState").mockReturnValue(data);
const useEffect = data => jest.spyOn(react, "useEffect").mockReturnValue(data);
const useContext = data => jest.spyOn(react, "useContext").mockReturnValue(data);
const useReducer = data => jest.spyOn(react, "useReducer").mockReturnValue(data);
const useCallback = data => jest.spyOn(react, "useCallback").mockReturnValue(data);
const useMemo = data => jest.spyOn(react, "useMemo").mockReturnValue(data);
const useRef = data => jest.spyOn(react, "useRef").mockReturnValue(data);
const useImperativeHandle = data => jest.spyOn(react, "useImperativeHandle").mockReturnValue(data);
const useLayoutEffect = data => jest.spyOn(react, "useLayoutEffect").mockReturnValue(data);
const useDebugValue = data => jest.spyOn(react, "useDebugValue").mockReturnValue(data);

export {
	useState,
	useEffect,
	useContext,
	useReducer,
	useCallback,
	useMemo,
	useRef,
	useImperativeHandle,
	useLayoutEffect,
	useDebugValue,
};
