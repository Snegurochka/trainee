import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const FlexBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export const FlexColumnBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const FlexBoxCenter = styled(Box)({
  display: "flex",
  justifyContent: "center",
});
