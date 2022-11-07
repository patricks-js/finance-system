import classNames from "classnames";
import { Trash } from "phosphor-react";

import { BalanceTypes } from "../../@types/BalanceTypes";
import { useModal } from "../../contexts/ModalContext";
import { formatValues } from "../../utils/formatValues";

type TableItemData = {
  data: BalanceTypes;
};

export const TableItem = ({ data }: TableItemData) => {
  const food = data.category.type === "food";
  const bills = data.category.type === "bills";
  const subscription = data.category.type === "subscription";
  const earnings = data.category.type === "earnings";

  const { setOpenModal, setBalanceId } = useModal();

  const handleModal = (id: string) => {
    setOpenModal(prev => !prev);
    setBalanceId(id);
  };

  return (
    <div className="w-full grid place-items-center grid-cols-4 ">
      <span className="tracking-widest">{data.date}</span>
      <span
        className={classNames("max-w-max px-4 py-2 text-white rounded", {
          "bg-rose-600": food,
          "bg-cyan-500": bills,
          "bg-violet-600": subscription,
          "bg-rose-900": earnings
        })}>
        {data.category.title && data.category.title}
      </span>
      <span className="text-lg font-medium">{data.title}</span>
      <span
        className={`font-medium text-lg ${
          data.category.expense ? "text-rose-500" : "text-teal-500"
        }`}>
        R$&nbsp;{formatValues(data.value)}
      </span>
      <button
        onClick={() => handleModal(data.id)}
        className="absolute right-10">
        <Trash
          size={24}
          weight="regular"
          className="text-red-600"
        />
      </button>
    </div>
  );
};
