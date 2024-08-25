import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { tokenService } from "../service/tokenService";
import { notification } from "antd";
import { TError } from "../types/types";

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (params: { userName: string; password: string }) =>
      login(params),
    onSuccess: (data) => {
      tokenService.setJwtToken(data.token);
      navigate("/main");
    },
    onError: (err: TError) => {
      notification.error({
        message: err?.response?.data.message,
        duration: 3,
      });
      console.log(err);
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();

  const logount = () => {
    tokenService.removeJwtToken();
    navigate("/login");
  };

  return {
    logount,
  };
};
