import axios from "axios";
import { githubAPIBaseURL } from "../constants/baseUrl";
import { UserInterface } from "../types/UserType";

export const getUser = async (username: string) => {
  if (!username.length) return;
  const userAPIURL = `${githubAPIBaseURL}/users/${username}`;
  const { data } = await axios.get<UserInterface>(userAPIURL);
  return data;
};
