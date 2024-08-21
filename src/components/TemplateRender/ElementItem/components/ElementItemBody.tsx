import { Input, /* Tooltip */ Form } from "antd";
import { TTemplate } from "../../../../types/types";
import Editor from "../../../Editor";
/* import { QuestionCircleFilled } from "@ant-design/icons"; */

type Props = {
  item: TTemplate;
  isEdit?: boolean;
};

export const ElementItemBody = ({ item, isEdit }: Props) => {
  /* const { title, text, srcImg } = item; */

  if (isEdit) {
    return (
      <div className="grid gap-3 mb-3">
        <Form name="edit" layout="vertical" initialValues={item}>
          <Form.Item label="Заголовок" name="title">
            <Input placeholder="Заголовок" />
          </Form.Item>
          <Form.Item label="Текст" name="text">
            {/* <Input placeholder="Текст" /> */}
            <Editor initData={item.text} />
          </Form.Item>
          <Form.Item label="Ссылка на изображение" name="srcImg">
            <Input placeholder="Ссылка на изображение" />
          </Form.Item>
        </Form>
      </div>
    );
  }
  return (
    <div className="grid gap-3 mb-3">
      {item?.title && <div className="font-medium">{item.title}</div>}
      {/*  {item?.title && (
        <div className="flex gap-3">
          <div className="font-medium">{item.title}</div>
          <Tooltip placement="right" title={"title"}>
            <QuestionCircleFilled />
          </Tooltip>
        </div>
      )} */}
      {item?.text && (
        <div
          className="whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: item?.text }}
        />
      )}
      {item?.srcImg && (
        <img className="rounded-3xl max-w-[640px]" src={item?.srcImg} />
      )}
    </div>
  );
};
