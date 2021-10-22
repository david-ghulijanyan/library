import * as react from "react";

// Hooks
const useState = () => jest.spyOn(react, "useState");
const useEffect = () => jest.spyOn(react, "useEffect");
const useContext = () => jest.spyOn(react, "useContext");
const useReducer = () => jest.spyOn(react, "useReducer");
const useCallback = () => jest.spyOn(react, "useCallback");
const useMemo = () => jest.spyOn(react, "useMemo");
const useRef = () => jest.spyOn(react, "useRef");
const useImperativeHandle = () => jest.spyOn(react, "useImperativeHandle");
const useLayoutEffect = () => jest.spyOn(react, "useLayoutEffect");
const useDebugValue = () => jest.spyOn(react, "useDebugValue");

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
