import { ArrowLeft, ArrowRight } from "phosphor-react";

import { BalanceTypes } from "../../@types/BalanceTypes";
import { useDate } from "../../contexts/DateContext";
import { formatCurrentMonth } from "../../utils/dateFilters";
import {
  reduceBalance,
  reduceExpenses,
  reduceIncomes
} from "../../utils/reduceValues";
import { Info } from "./Info";

type InformationProps = {
  data: BalanceTypes[];
};

export const Information = ({ data }: InformationProps) => {
  const { currentMonth, setCurrentMonth, currentYear, setCurrentYear } =
    useDate();

  function nextMonth() {
    if (currentMonth >= 12) {
      setCurrentMonth(prev => prev - prev);
      setCurrentYear(prev => prev + 1);
    }
    setCurrentMonth(prev => prev + 1);
  }

  function prevMonth() {
    if (currentMonth <= 1) {
      setCurrentMonth(prev => prev + 12);
      setCurrentYear(prev => prev - 1);
    }
    setCurrentMonth(prev => prev - 1);
  }

  return (
    <div className="w-full shadow-lg rounded p-5 bg-gray-100 flex flex-col items-center gap-5 md:flex-row md:justify-evenly">
      <div className="flex items-center gap-x-2 md:gap-x-5">
        <button onClick={prevMonth}>
          <ArrowLeft
            size={24}
            weight="bold"
          />
        </button>
        <span className="text-lg font-medium inline-flex items-center text-center">
          <span className="inline-block w-full md:truncate lg:text-clip md:w-14 lg:w-full">
            {formatCurrentMonth(currentMonth)}
          </span>
          <span>-</span>
          <span>{currentYear}</span>
        </span>
        <button onClick={nextMonth}>
          <ArrowRight
            size={24}
            weight="bold"
          />
        </button>
      </div>
      <Info
        title="Receitas"
        value={reduceIncomes(data)}
      />
      <Info
        title="Despesas"
        value={reduceExpenses(data)}
      />
      <Info
        title="Balanço"
        value={reduceBalance(data)}
      />
    </div>
  );
};
