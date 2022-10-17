import { BalanceTypes } from "../@types/BalanceTypes";

export const validateData = (data: BalanceTypes): BalanceTypes => {
  const [year, month, day] = data.date.split("-");

  const validatedData: BalanceTypes = {
    ...data,
    value: Number(data.value),
    date: `${day}-${month}-${year}`
  };

  return validatedData;
};
