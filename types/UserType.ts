import { UserId } from "../store/user/favoriteUserSlice";

export interface UserInfo {
  id: UserId;
  company: string;
  name: string;
  public_repos: number;
  avatar_url: string;
  repos_url: string;
}
