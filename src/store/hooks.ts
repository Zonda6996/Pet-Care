import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { RootState } from '@/store/store'
import { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
