import { useEffect, useState } from "react";

import { BalanceTypes } from "../@types/BalanceTypes";
import { Form } from "../components/Form";
import { Information } from "../components/Information";
import { TableArea } from "../components/TableArea";
import { useDate } from "../contexts/DateContext";
import { useModal } from "../contexts/ModalContext";
import { api } from "../server/api";
import { filteredListByMonth } from "../utils/dateFilters";

export const Content = () => {
  const [balanceFilteredByMonth, setBalanceFilteredByMonth] = useState<
    BalanceTypes[]
  >([]);

  const { currentMonth, currentYear } = useDate();

  const { newBalance, setNewBalance } = useModal();

  const createBalance = (data: BalanceTypes) => {
    setNewBalance(data);
  };

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/balance/");
      setBalanceFilteredByMonth(
        filteredListByMonth(
          data,
          currentMonth.toString().padStart(2, "0"),
          currentYear
        )
      );

      console.log(balanceFilteredByMonth);
    })();
  }, [newBalance, currentMonth]);

  return (
    <div className="grid gap-y-10 -translate-y-12">
      <Information data={balanceFilteredByMonth} />
      <Form onSubmit={createBalance} />
      <TableArea balance={balanceFilteredByMonth} />
    </div>
  );
};
