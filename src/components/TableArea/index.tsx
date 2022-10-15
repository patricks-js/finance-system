import { Item } from "../../@types/ItemTypes";
import { TableItem } from "../TableItem";
import { TableHeader } from "./TableHeader";

type TableAreaProps = {
  list: Item[];
};

export const TableArea = ({ list }: TableAreaProps) => {
  return (
    <div className="w-full shadow-lg rounded p-5 bg-gray-100">
      <header className="w-full grid place-items-center grid-cols-4">
        <TableHeader>Data</TableHeader>
        <TableHeader>Categoria</TableHeader>
        <TableHeader>Título</TableHeader>
        <TableHeader>Valor</TableHeader>
      </header>
      <div className="grid gap-y-4">
        {list.map((item, idx) => (
          <TableItem
            key={idx}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};
