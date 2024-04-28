import { FlexBoxCenter } from "../../../components/Base";
import { Box, styled } from "@mui/material";

const ChallengeDay = styled(Box)`
  width: 32px;
  height: 32px;
  border-radius: 4px;
`;

const ChallengeSuccessDay = styled(ChallengeDay)`
  background: var(--success);
`;

const ChallengeEmptyDay = styled(ChallengeDay)`
  background: var(--lightGrey);
`;

export const ChallengeProgressBar = ({ days }: { days: number }) => {
  const week = new Array(14).fill("");
  return (
    <FlexBoxCenter gap={1} m={1}>
      {week.map((day, index) => {
        return index < days ? <ChallengeSuccessDay /> : <ChallengeEmptyDay />;
      })}
    </FlexBoxCenter>
  );
};
