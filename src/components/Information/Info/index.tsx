import { formatValues } from "../../../utils/formatValues";

type InfoProps = {
  title: string;
  value: number;
};

export const Info = ({ title, value }: InfoProps) => {
  return (
    <div className="grid place-items-center gap-y-2">
      <span className="text-lg font-medium">{title}</span>
      {title === "Despesas" ? (
        <span className="text-rose-500 font-medium text-xl">
          R $&nbsp;{formatValues(value)}
        </span>
      ) : (
        <span
          className={`${
            value >= 0
              ? "text-teal-500 font-medium text-xl"
              : "text-rose-500 font-medium text-xl"
          }`}>
          R$&nbsp;{formatValues(value)}
        </span>
      )}
    </div>
  );
};
