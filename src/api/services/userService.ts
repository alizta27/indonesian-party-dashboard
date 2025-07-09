import apiClient from "../apiClient";

import type { UserInfo, UserToken } from "#/entity";
import { supabase } from "@/lib/supabase";

export interface SignInReq {
  email: string;
  password: string;
  twoFactorCode: string;
}

export interface SignUpReq extends SignInReq {
  email: string;
}
export type SignInRes = UserToken & { user: UserInfo };

export enum UserApi {
  SignIn = "/auth/signin",
  SignUp = "/auth/signup",
  Logout = "/auth/logout",
  Refresh = "/auth/refresh",
  User = "/user",
}

const sbSignIn = async (payload: { email: string; password: string }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: payload.email,
    password: payload.password,
  });

  if (error) throw new Error(error.message);

  return {
    accessToken: data.session?.access_token,
    refreshToken: data.session?.refresh_token,
    user: data.user,
  };
};

const signin = (data: SignInReq) =>
  apiClient.post<SignInRes>({ url: UserApi.SignIn, data });
const signup = (data: SignUpReq) =>
  apiClient.post<SignInRes>({ url: UserApi.SignUp, data });
const logout = () => apiClient.get({ url: UserApi.Logout });
const findById = (id: string) =>
  apiClient.get<UserInfo[]>({ url: `${UserApi.User}/${id}` });

export default {
  signin,
  signup,
  findById,
  logout,
  sbSignIn,
};
