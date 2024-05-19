import { useSelector } from "react-redux";
import { Challenge } from "../modules/Challenge/components/Challenge";
import { UserCompletedAnswers } from "../modules/User/components/UserCompletedAnswers";
import { selectIsAuth } from "../modules/User/services/user-selectors";
import { FlexColumnBox } from "../components/Base";

export const AccountPage = () => {
  const isAuth = useSelector(selectIsAuth);
  if (!isAuth) {
    return <div>Not authorized</div>;
  }
  return (
    <FlexColumnBox gap={2}>
      <h1>Account Page</h1>
      <UserCompletedAnswers />
      <Challenge />
    </FlexColumnBox>
  );
};
