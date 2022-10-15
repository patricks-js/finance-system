import classNames from "classnames";

import { Item } from "../../@types/ItemTypes";
import { formatDate } from "../../helpers/dateFilters";
import { formatBudget } from "../../helpers/formatBudget";
import { categories } from "../../utils/categories";

type TableItemData = {
  data: Item;
};

export const TableItem = ({ data }: TableItemData) => {
  const food = categories[data.category].type === "food";
  const bills = categories[data.category].type === "bills";
  const subscription = categories[data.category].type === "subscription";
  const earnings = categories[data.category].type === "earnings";

  return (
    <div className="w-full grid place-items-center grid-cols-4">
      <span className="tracking-widest">{formatDate(data.date)}</span>
      <span
        className={classNames("max-w-max px-4 py-2 text-gray-100 rounded", {
          "bg-rose-600": food,
          "bg-cyan-500": bills,
          "bg-violet-600": subscription,
          "bg-rose-900": earnings
        })}>
        {categories[data.category].title}
      </span>
      <span>{data.title}</span>
      <span
        className={`font-medium text-lg ${
          categories[data.category].expense ? "text-rose-500" : "text-teal-500"
        }`}>
        {formatBudget(data.value.toString())}
      </span>
    </div>
  );
};
