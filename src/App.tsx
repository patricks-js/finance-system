import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { Content } from "./Content";
import { useModal } from "./contexts/ModalContext";

export const App = () => {
  const { isOpen, setOpenModal } = useModal();

  return (
    <div className="bg-gray-100 text-zinc-900 w-full min-h-screen relative">
      <Header />
      <div className="container mx-auto">
        <Content />
      </div>
      <Modal
        openModal={isOpen}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};
