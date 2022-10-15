import { Item } from "../@types/ItemTypes";

export const getCurrentMonth = () => {
  const now = new Date();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");

  return `${now.getFullYear()} - ${month}`;
};

export const filteredListByMonth = (list: Item[], date: string): Item[] => {
  const newList: Item[] = [];

  const [year, month] = date.split("-");

  list.forEach(item => {
    if (
      item.date.getFullYear() === parseInt(year) &&
      item.date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(item);
    }
  });

  return newList;
};

export const formatDate = (date: Date): string => {
  const now = new Date();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDay().toString().padStart(2, "0");

  return `${date.getFullYear()}/${month}/${day}`;
};
