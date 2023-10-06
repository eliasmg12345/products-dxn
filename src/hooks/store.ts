import { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../context/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch