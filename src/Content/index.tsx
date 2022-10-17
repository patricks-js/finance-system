import { useEffect, useState } from "react";

import { BalanceTypes } from "../@types/BalanceTypes";
import { Form } from "../components/Form";
import { TableArea } from "../components/TableArea";
import { api } from "../server/api";

export const Content = () => {
  const [balance, setBalance] = useState<BalanceTypes[]>([]);
  const [newBalance, setNewBalance] = useState<BalanceTypes>();

  const createBalance = (data: BalanceTypes) => {
    setNewBalance(data);
  };

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/balance/");
      setBalance(data);
    })();
  }, [newBalance]);

  return (
    <div className="grid gap-y-10 -translate-y-12">
      {/* <Information
        date={currentMonth}
        onDateChange={handleDate}
        income={income}
        expense={expense}
      /> */}
      <Form onSubmit={createBalance} />
      <TableArea balance={balance} />
    </div>
  );
};
