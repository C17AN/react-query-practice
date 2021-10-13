import { useQuery } from "react-query";
import { getUser } from "../../apis/getUser";

const useUserInfo = (userName: string) => {
  return useQuery("userInfo", () => getUser(userName), { enabled: false });
};

export default useUserInfo;
