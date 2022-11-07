import { useEffect, useState } from "react";

import { BalanceTypes } from "../../@types/BalanceTypes";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { Information } from "../../components/Information";
import { TableArea } from "../../components/TableArea";
import { api } from "../../config/api";
import { useDate } from "../../contexts/DateContext";
import { useModal } from "../../contexts/ModalContext";
import { filteredListByMonth } from "../../utils/dateFilters";

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
      try {
        const { data } = await api.get("/balance");

        setBalanceFilteredByMonth(
          filteredListByMonth(
            data,
            currentMonth.toString().padStart(2, "0"),
            currentYear
          )
        );
      } catch (err) {
        console.log(err);
      }
    })();
  }, [newBalance, currentMonth]);

  return (
    <>
      <div className="bg-gray-100 text-zinc-900 w-full min-h-screen relative">
        <Header />
        <div className="container mx-auto">
          <div className="grid gap-y-10 -translate-y-12">
            <Information data={balanceFilteredByMonth} />
            <Form onSubmit={createBalance} />
            <TableArea balance={balanceFilteredByMonth} />
          </div>
        </div>
      </div>
    </>
  );
};
