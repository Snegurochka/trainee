import styled from "@emotion/styled";

const ProgressBarBox = styled.div`
  position: relative;
  width: 100%;
  height: 22px;
  background: var(--lightGrey);
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressBarValue = styled.div<{ value: number }>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: ${(props) => props.value}%;
  height: 22px;
  background: var(--success);
`;

type TProgressBarProps = {
  value: number;
};

export const ProgressBar = ({ value }: TProgressBarProps) => {
  return (
    <ProgressBarBox>
      <ProgressBarValue value={value}></ProgressBarValue>
    </ProgressBarBox>
  );
};
