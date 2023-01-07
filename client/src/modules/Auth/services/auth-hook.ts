import { useSelector } from "react-redux";
import { selectUser } from "../../User/services/user-selectors";

export const useAuth = () => {
  const { email, token } = useSelector(selectUser);

  return {
    isAuth: !!token,
    email,
  };
};
