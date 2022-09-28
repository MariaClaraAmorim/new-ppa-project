import { ChangeEvent, HTMLAttributes, useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import css from "./styles.module.css"
type FileSelectorProps = HTMLAttributes<HTMLInputElement>;

function Upload(props: FileSelectorProps) {
  const { children, ...rest } = props;

  // Referencia para o input de arquivo
  const fileSelectorRef = useRef<HTMLInputElement>(null);

  // Clica num input[type=file] artificialmente
  const openFileSelector = () => {
    fileSelectorRef.current?.click();
  };

  // Envia o arquivo selecionado ao servidor
  const sendFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const file = files?.[0];

    // Sem arquivo não dá irmão!
    if (!file) {
      return window.alert("Sem arquivo é sacanagem!");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("file_name", file.name);

    try {
      await fetch("/upload", {
        method: "POST",
        body: formData,
      });

      window.alert("Sucesso!");
    } catch (error) {
      window.alert("Deu ruim!");
    }
  };

  return (
    <>
      <input
        type="file"
        hidden
        onChange={sendFile}
        ref={fileSelectorRef}
        style={{ display: "none" }}
        {...rest}
      />
      <button className={css.btnUpload} onClick={openFileSelector}>
        <AiOutlineCloudUpload />
        Anexar nota fiscal
        {children}
      </button>
    </>
  );
}

export { Upload };
