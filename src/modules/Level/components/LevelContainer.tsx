import { useSelector } from "react-redux";
import { styled } from "@mui/system";
import { Box, Stack } from "@mui/material";

import { UserLevel } from "../../User/components/UserLevel";
import { selectIsAuth } from "../../User/services/user-selectors";
import { Xp } from "../../Xp/components/xp";

import levelImg from "../assets/level.png";

export const LevelWrapper = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  marginTop: "20px",
  gap: "10px",
});

export const LevelContainer = () => {
  const isAuth = useSelector(selectIsAuth);
  if (!isAuth) {
    return null;
  }
  return (
    <LevelWrapper>
      <img src={levelImg} alt="level" width="49" height="29" />
      <Stack>
        <UserLevel />
        <Xp />
      </Stack>
    </LevelWrapper>
  );
};
