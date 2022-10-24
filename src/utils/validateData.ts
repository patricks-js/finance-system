import { BalanceTypes } from "../@types/BalanceTypes";

export const formatData = (data: BalanceTypes): BalanceTypes => {
  const [year, month, day] = data.date.split("-");

  const validatedData: BalanceTypes = {
    ...data,
    date: `${day}-${month}-${year}`,
    value: Number(data.value)
  };

  return validatedData;
};
