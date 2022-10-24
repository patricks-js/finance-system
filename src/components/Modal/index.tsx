import { BalanceTypes } from "../../@types/BalanceTypes";
import { useModal } from "../../contexts/ModalContext";
import { api } from "../../server/api";

type ModalProps = {
  openModal: boolean;
  setOpenModal: (state: boolean | ((prevState: boolean) => boolean)) => void;
};

export const Modal = ({ openModal, setOpenModal }: ModalProps) => {
  const { balanceId, setNewBalance } = useModal();

  const handleClick = () => {
    setOpenModal(prev => !prev);
  };

  const handleExcludeTask = async () => {
    await api.delete(`/balance/${balanceId}`);
    setNewBalance({} as BalanceTypes);
    handleClick();
  };

  return (
    <div
      className={`overflow-hidden fixed inset-0 z-50 place-items-center bg-opacity-70 bg-zinc-700 ${
        openModal ? "grid" : "hidden"
      }`}>
      <div className="w-[450px] h-60 rounded shadow-md bg-gray-100 grid p-5">
        <p className="text-xl text-center leading-9">
          Tem certeza de que deseja excluir esta informação? Recomendamos que
          revise antes de tentar exclui-la.
        </p>
        <div className="w-full flex gap-x-5 items-center">
          <button
            className="w-full rounded bg-red-500 py-3 text-xl text-gray-100 hover:bg-red-600 transition-colors duration-300"
            onClick={handleExcludeTask}>
            Sim!
          </button>
          <button
            className="w-full rounded bg-blue-500 py-3 text-xl text-gray-100 hover:bg-blue-600 transition-colors duration-300"
            onClick={handleClick}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
