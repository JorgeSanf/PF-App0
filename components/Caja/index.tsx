import { Alert, Box, Button, Modal, TextInput } from "@mantine/core";
import { useState } from "react";
import { Guardar } from "../../functions/guardar";

export default function Caja({
  html,
  onClickGuardar,
}: {
  html: string;
  onClickGuardar: any;
}) {
  const [titol, setTitol] = useState("Título");
  const [topic, setTopic] = useState("Tema");
  const [opened, setOpened] = useState(false);

  const estadoInicial = () => {
    setTitol("Título");
    setTopic("Tema");
  };

  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
        marginBottom: "20px",
        marginLeft: "18%",
      }}
    >
      <Button
        style={{ float: "right", marginTop: "50px" }}
        onClick={() => {
          Guardar({ titol, topic, html });
          setOpened(true);
          estadoInicial();
          onClickGuardar();
        }}
      >
        Enviar
      </Button>
      <br />
      <TextInput
        style={{ width: "75%" }}
        variant="default"
        placeholder={titol}
        onChange={(e) => {
          setTitol(e.target.value);
        }}
      />
      <TextInput
        style={{ width: "75%", marginTop: "20px" }}
        variant="default"
        placeholder={topic}
        onChange={(e) => {
          setTopic(e.target.value);
        }}
      />
      <Modal
        opened={opened}
        onClose={() => {
          setOpened(false);
        }}
        withCloseButton={false}
      >
        Documento guardado
      </Modal>
    </div>
  );
}
