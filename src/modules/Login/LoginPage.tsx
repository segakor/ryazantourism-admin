import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  type FieldType = {
    username?: string;
    password?: string;
  };

  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    navigate("/main");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-amber-100 h-screen">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-lg bg-white p-10 shadow-md">
        <div className="font-medium text-l mb-3">Вход в админ панель</div>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="username"
            rules={[
              { required: true, message: "Заполните обязательное поле" },
              {
                type: "email",
                message: "Некорректный email",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Заполните обязательное поле" }]}
          >
            <Input.Password placeholder="Пароль" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
