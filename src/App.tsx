import { BrowserRouter } from "react-router-dom";

import { Modal } from "./components/Modal";
import { useModal } from "./contexts/ModalContext";
import { Routes } from "./routes";

export const App = () => {
  const { isOpen, setOpenModal } = useModal();

  return (
    <BrowserRouter>
      <Routes />
      <Modal
        openModal={isOpen}
        setOpenModal={setOpenModal}
      />
    </BrowserRouter>
  );
};
