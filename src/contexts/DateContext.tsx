import { createContext, useContext, useState } from "react";

import { Children } from "../@types/Children";
import { getCurrentMonth, getCurrentYear } from "../utils/dateFilters";

const initialContext = {
  currentMonth: 1,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCurrentMonth: () => {},
  currentYear: 2022,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCurrentYear: () => {}
};

type ContextTypes = {
  currentMonth: number;
  setCurrentMonth: (month: number | ((value: number) => number)) => void;
  currentYear: number;
  setCurrentYear: (year: number | ((value: number) => number)) => void;
};

const DateContext = createContext<ContextTypes>(initialContext);

export const DateContextProvider = ({ children }: Children) => {
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [currentYear, setCurrentYear] = useState(getCurrentYear());
  return (
    <DateContext.Provider
      value={{ currentMonth, setCurrentMonth, currentYear, setCurrentYear }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => {
  const { currentMonth, setCurrentMonth, currentYear, setCurrentYear } =
    useContext(DateContext);
  return { currentMonth, setCurrentMonth, currentYear, setCurrentYear };
};
