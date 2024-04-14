import { RootState } from "../../../services/store";

export const selectChallengeDays = (state: RootState) => state.challenge.challengeDays;
export const selectIdChallenge = (state: RootState) => state.challenge.idChallenge;
export const selectChallengeActive = (state: RootState) => state.challenge.isActive;
export const selectChallengeDateStart = (state: RootState) => state.challenge.dateStart;
export const selectChallengeLastCheckIn = (state: RootState) => state.challenge.lastCheckIn;