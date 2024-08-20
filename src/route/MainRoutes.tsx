import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const MainRoutes = () => {
  const LoginPage = lazy(() => import("../modules/LoginPage"));
  const Main = lazy(() => import("../modules/Main"));

  return (
    <Suspense fallback={<Spin />}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="*" element={<Navigate replace to="login" />} />
      </Routes>
    </Suspense>
  );
};
