import { Children } from "../@types/Children";
import { DateContextProvider } from "./DateContext";
import { ModalContextProvider } from "./ModalContext";

export const ContextsProvider = ({ children }: Children) => {
  return (
    <ModalContextProvider>
      <DateContextProvider>{children}</DateContextProvider>
    </ModalContextProvider>
  );
};
