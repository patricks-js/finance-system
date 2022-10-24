import { BalanceTypes } from "../@types/BalanceTypes";

export const reduceIncomes = (data: BalanceTypes[]): number => {
  return data
    .filter(value => value.value && !value.category.expense)
    .map(value => Number(value.value?.toString().replace(",", ".")))
    .reduce((prev, cur) => prev + cur, 0);
};

export const reduceExpenses = (data: BalanceTypes[]): number => {
  return data
    .filter(value => value.value && value.category.expense)
    .map(value => Number(value.value?.toString().replace(",", ".")))
    .reduce((prev, cur) => prev + cur, 0);
};

export const reduceBalance = (data: BalanceTypes[]): number => {
  const income = reduceIncomes(data);
  const expenses = reduceExpenses(data);
  return income - expenses;
};
