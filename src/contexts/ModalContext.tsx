import { createContext, useContext, useState } from "react";

import { BalanceTypes } from "../@types/BalanceTypes";
import { Children } from "../@types/Children";

type ModalContextTypes = {
  isOpen: boolean;
  setOpenModal: (state: boolean | ((prevState: boolean) => boolean)) => void;
  balanceId: string;
  setBalanceId: (state: string) => void;
  newBalance: BalanceTypes | undefined;
  setNewBalance: (value: BalanceTypes) => void;
};

const initialValues = {
  isOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setOpenModal: () => {},
  balanceId: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setBalanceId: () => {},
  newBalance: {} as BalanceTypes,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setNewBalance: () => {}
};

const ModalContext = createContext<ModalContextTypes>(initialValues);

export const ModalContextProvider = ({ children }: Children) => {
  const [balanceId, setBalanceId] = useState("");
  const [isOpen, setOpenModal] = useState(false);
  const [newBalance, setNewBalance] = useState<BalanceTypes>();

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setOpenModal,
        balanceId,
        setBalanceId,
        newBalance,
        setNewBalance
      }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const {
    isOpen,
    setOpenModal,
    balanceId,
    setBalanceId,
    newBalance,
    setNewBalance
  } = useContext(ModalContext);
  return {
    isOpen,
    setOpenModal,
    balanceId,
    setBalanceId,
    newBalance,
    setNewBalance
  };
};
