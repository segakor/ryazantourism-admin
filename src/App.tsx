import { AppRoutes } from "./route";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ConfigProvider } from "antd";

export const App = () => {
  return (
    <ConfigProvider
      /* theme={{
        token: {
          // Seed Token
          colorPrimary: "#00B96B",
          borderRadius: 8,

          // Alias Token
          colorBgContainer: "#f6ffed",
        },
      }} */
    >
      <ErrorBoundary>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ErrorBoundary>
    </ConfigProvider>
  );
};
