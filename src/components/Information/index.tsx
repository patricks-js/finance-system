import { ArrowLeft, ArrowRight } from "phosphor-react";

import { formatCurrentDate } from "../../helpers/dateFilters";
import { Info } from "./Info";

type InformationProps = {
  date: string;
  onDateChange: (value: string) => void;
  income: number;
  expense: number;
};

export const Information = ({
  date,
  onDateChange,
  income,
  expense
}: InformationProps) => {
  const handlePrevMonth = () => {
    const [year, month] = date.split("-");
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    const newDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }`;
    onDateChange(newDate);
  };

  const handleNextMonth = () => {
    const [year, month] = date.split("-");
    const currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    const newDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }`;
    onDateChange(newDate);
  };

  return (
    <div className="w-full shadow-lg rounded p-5 grid bg-gray-100 place-items-center grid-cols-4">
      <div className="flex items-center gap-x-5">
        <button onClick={handlePrevMonth}>
          <ArrowLeft
            size={24}
            weight="bold"
          />
        </button>
        <span className="text-lg font-medium inline-block w-44 text-center">
          {formatCurrentDate(date)}
        </span>
        <button onClick={handleNextMonth}>
          <ArrowRight
            size={24}
            weight="bold"
          />
        </button>
      </div>
      <Info
        title="Receitas"
        value={income}
      />
      <Info
        title="Despesas"
        value={expense}
      />
      <Info
        title="Balanço"
        value={income - expense}
      />
    </div>
  );
};
