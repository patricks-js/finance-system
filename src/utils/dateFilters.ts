import { BalanceTypes } from "../@types/BalanceTypes";

export const getCurrentMonth = () => {
  const now = new Date();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  return parseInt(month);
};

export const getCurrentYear = () => {
  const now = new Date();
  const year = now.getFullYear();
  return year;
};

export const filteredListByMonth = (
  list: BalanceTypes[],
  currentMonth: string,
  currentYear: number
): BalanceTypes[] => {
  const newList: BalanceTypes[] = [];

  list.forEach(item => {
    const [, month, year] = item.date.split("-");

    if (month === currentMonth.toString() && year === currentYear.toString()) {
      newList.push(item);
    }
  });

  return newList;
};

export const formatCurrentMonth = (currentMonth: number): string => {
  const month = currentMonth.toString().padStart(2, "0");
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

  return `${months[parseInt(month) - 1]}`;
};
