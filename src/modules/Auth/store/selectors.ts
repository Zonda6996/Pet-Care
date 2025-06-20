import { RootState } from "@/store/store";


export const selectUser = (state:RootState) => state.auth.user
export const selectError = (state: RootState) => state.auth.error
export const selectIsLoading = (state: RootState) => state.auth.isLoading