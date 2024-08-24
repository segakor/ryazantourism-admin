import axios from "axios"


export const login = async ({ userName, password }: { userName: string; password: string }) => {
  return (await axios.get(`http://79.174.85.156:5001/api/login`)).data;
};
