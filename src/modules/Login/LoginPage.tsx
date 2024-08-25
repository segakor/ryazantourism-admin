import type { FormProps } from "antd";
import { Button, Form, Input, Layout } from "antd";
import { useLogin } from "../../hooks";

export const LoginPage = () => {
  type FieldType = {
    userName: string;
    password: string;
  };

  const { isPending, mutate } = useLogin();

  const onFinish: FormProps<FieldType>["onFinish"] =  (values) => {
    mutate(values);
  };

  return (
    <Layout className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-amber-100 h-screen">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-lg bg-white p-10 shadow-md">
        <div className="font-medium text-l mb-3">Вход в админ панель</div>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="userName"
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
            <Button type="primary" htmlType="submit" block loading={isPending}>
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};
