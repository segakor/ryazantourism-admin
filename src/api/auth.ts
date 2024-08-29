import { axiosClient } from "../config";

export const login = async ({
  userName,
  password,
}: {
  userName: string;
  password: string;
}) => {
  return (
    await axiosClient.post<{ token: string }>(`http://79.174.85.156:5001/api/login`, {
      userName,
      password,
    })
  ).data;
};
