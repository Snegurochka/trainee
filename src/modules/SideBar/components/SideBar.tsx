import { Stack } from "@mui/material";
import { AuthNavButton } from "../../Auth/components/AuthNavButton";
import { Menu } from "../../Menu/components/Menu";
import { UserAnswersTotal } from "../../User/components/UserAnswersTotal";
import { LevelContainer } from "../../Level/components/LevelContainer";
import { ChallengeDays } from "../../Challenge/components/ChallengeDays";

export const SideBar = () => {
  return (
    <Stack spacing={4}>
      <LevelContainer />
      <UserAnswersTotal />
      <ChallengeDays />
      <Menu />
      <AuthNavButton />
    </Stack>
  );
};
