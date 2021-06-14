import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();

// aliasing useSelector with our required typescript
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

