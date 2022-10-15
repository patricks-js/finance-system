import { formatBudget } from "../../../helpers/formatBudget";

type InfoProps = {
  title: string;
  value: number;
};

export const Info = ({ title, value }: InfoProps) => {
  return (
    <div className="grid place-items-center">
      <span className="text-lg font-medium">{title}</span>
      {title === "Despesas" ? (
        <span className="text-rose-500 font-medium">
          {formatBudget(value.toString())}
        </span>
      ) : (
        <span
          className={`${
            value >= 0
              ? "text-teal-500 font-medium"
              : "text-rose-500 font-medium"
          }`}>
          {formatBudget(value.toString())}
        </span>
      )}
    </div>
  );
};
