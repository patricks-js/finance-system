import { BalanceTypes } from "../../@types/BalanceTypes";
import { TableItem } from "../TableItem";
import { TableHeader } from "./TableHeader";

type TableAreaProps = {
  balance: BalanceTypes[];
};

export const TableArea = ({ balance }: TableAreaProps) => {
  return (
    <div className="w-full shadow-lg rounded p-5 bg-gray-100">
      {balance.length === 0 ? (
        <p className="text-center font-semibold">Nenhum saldo registrado</p>
      ) : (
        <>
          <header className="w-full grid place-items-center grid-cols-4">
            <TableHeader>Data</TableHeader>
            <TableHeader>Categoria</TableHeader>
            <TableHeader>Título</TableHeader>
            <TableHeader>Valor</TableHeader>
          </header>
          <div className="grid gap-y-4">
            {balance.map((item, idx) => (
              <TableItem
                key={idx}
                data={item}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
