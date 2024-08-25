import { Navigate, Route, Routes } from "react-router";

export const MainRoutes = () => {
  return (
    <Routes>
        <Route
          path="/"
          element={<div className="text-lg">Админ панель ryazantourism.ru</div>}
        ></Route>
        <Route path="main/*" element={<Navigate replace to="/" />} />
      </Routes>
  );
};
