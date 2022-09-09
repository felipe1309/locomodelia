import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, appDispatch } from '../app/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => appDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector