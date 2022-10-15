import { Children } from "../../../@types/Children";

export const TableHeader = ({ children }: Children) => {
  return <span className="text-xl font-bold mb-5">{children}</span>;
};
