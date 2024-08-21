import { CKEditor } from "ckeditor4-react";

type Props = {
  initData: string;
};

export const Editor = ({ initData }: Props) => {
  return (
    <div className="App">
      <CKEditor
        config={{
          versionCheck: false,
          toolbar: [
            [
              "Bold",
              "Italic",
              "-",
              "BulletedList",
              "-",
              "Link",
              "-",
              "Image",
              "-",
              "Table",
            ],
            "/",
            ["Source"],
          ],
          uiColor: "#AADC6E",
          extraPlugins: "uploadimage",
          filebrowserUploadMethod: "form",
          filebrowserUploadUrl: "/uploader/upload",
          removeDialogTabs:
            "image:info;image:Link;image:advanced;link:upload;link:advanced",
        }}
        initData={initData}
        onChange={(e)=>console.log(e)}
        /*  onInstanceReady={() => {
          alert("Editor is ready!");
        }} */
      />
    </div>
  );
};
