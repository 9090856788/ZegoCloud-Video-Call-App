/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch } from "react-redux";
import { setUserName, setRandomId } from "./reducers";

const provideUserDetails = () => {
  const dispatch = useDispatch();
  return {
    setUserName: (userName) => dispatch(setUserName(userName)),
    setRandomId: (randomId) => dispatch(setRandomId(randomId)),
  };
};

export default provideUserDetails;
