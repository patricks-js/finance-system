import classNames from "classnames";

import { BalanceTypes } from "../../@types/BalanceTypes";
import { formatBudget } from "../../helpers/formatBudget";

type TableItemData = {
  data: BalanceTypes;
};

export const TableItem = ({ data }: TableItemData) => {
  const food = data.category.type === "food";
  const bills = data.category.type === "bills";
  const subscription = data.category.type === "subscription";
  const earnings = data.category.type === "earnings";

  return (
    <div className="w-full grid place-items-center grid-cols-4">
      <span className="tracking-widest">{data.date}</span>
      <span
        className={classNames("max-w-max px-4 py-2 text-gray-100 rounded", {
          "bg-rose-600": food,
          "bg-cyan-500": bills,
          "bg-violet-600": subscription,
          "bg-rose-900": earnings
        })}>
        {data.category.title && data.category.title}
      </span>
      <span>{data.title}</span>
      <span
        className={`font-medium text-lg ${
          data.expense ? "text-rose-500" : "text-teal-500"
        }`}>
        {data.value && formatBudget(data.value.toString())}
      </span>
    </div>
  );
};
