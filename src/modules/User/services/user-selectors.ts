import { RootState } from "../../../services/store";

export const selectUser = (state: RootState) => state.user.user;
export const selectIsAuth = (state: RootState) => state.user.isAuth;
export const selectUid = (state: RootState) => state.user.user?.id;
export const selectIdDoc = (state: RootState) => state.user.user?.idDoc
export const selectCompleted = (state: RootState) => state.user.user?.completed || [];