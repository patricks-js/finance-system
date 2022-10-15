import { useEffect, useState } from "react";

import { Item } from "../@types/ItemTypes";
import { Form } from "../components/Form";
import { Information } from "../components/Information";
import { TableArea } from "../components/TableArea";
import { filteredListByMonth, getCurrentMonth } from "../helpers/dateFilters";
import { categories } from "../utils/categories";
import { Items } from "../utils/items";

export const Content = () => {
  const [list, setList] = useState(Items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filteredListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (const i in filteredList) {
      const isExpense = categories[filteredList[i].category].expense;
      if (isExpense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    const icomeStr = incomeCount.toString();
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleDate = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return (
    <div className="grid gap-y-10 -translate-y-12">
      <Information
        date={currentMonth}
        onDateChange={handleDate}
        income={income}
        expense={expense}
      />
      <Form />
      <TableArea list={filteredList} />
    </div>
  );
};
