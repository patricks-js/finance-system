import { useEffect, useState } from "react";

import { Item } from "../@types/ItemTypes";
import { TableArea } from "../components/TableArea";
import { filteredListByMonth, getCurrentMonth } from "../helpers/dateFilters";
import { Items } from "../utils/items";

export const Content = () => {
  const [list, setList] = useState(Items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filteredListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <div>
      <TableArea list={filteredList} />
    </div>
  );
};
