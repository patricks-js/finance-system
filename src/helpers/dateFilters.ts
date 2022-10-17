import { Item } from "../@types/BalanceTypes";

export const getCurrentMonth = () => {
  const now = new Date();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const currentMonth = `${now.getFullYear()}-${month}`;
  return currentMonth;
};

export const filteredListByMonth = (list: Item[], date: string): Item[] => {
  const newList: Item[] = [];

  const [year, month] = date.split("-");

  list.forEach(item => {
    if (item.date instanceof Date) {
      if (
        item.date.getFullYear() === parseInt(year) &&
        item.date.getMonth() + 1 === parseInt(month)
      ) {
        newList.push(item);
      }
    }
  });

  return newList;
};

export const formatDate = (date: Date): string => {
  const now = new Date();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDay().toString().padStart(2, "0");

  return `${month}/${day}/${date.getFullYear()}`;
};

export const formatCurrentDate = (date: string): string => {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  const [year, month] = date.split("-");

  return `${months[parseInt(month) - 1]}-${year}`;
};
