import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { v4 as uuid } from "uuid";

import { BalanceTypes } from "../../@types/BalanceTypes";
import { OptionsTypes } from "../../@types/OptionsTypes";
import { api } from "../../server/api";
import { formatData } from "../../utils/validateData";
import { Button } from "../Button";
import { Field } from "./Field";
import { Select } from "./Select";

type FormProps = {
  onSubmit: (value: BalanceTypes) => void;
};

const initialValues = {
  id: "",
  date: "",
  category: {
    type: "",
    expense: false
  },
  title: "",
  value: 0
};

export const Form = ({ onSubmit }: FormProps) => {
  const [balance, setBalance] = useState<BalanceTypes>(initialValues);
  const [options, setOptions] = useState<OptionsTypes[]>([]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    postBalance(balance);
    setBalance(initialValues);
  };

  const postBalance = async (data: BalanceTypes) => {
    const formattedData = formatData(data);
    await api.post("/balance/", formattedData);
    onSubmit(formattedData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBalance({
      ...balance,
      id: uuid(),
      [e.target.name]: e.target.value
    });
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setBalance({
      ...balance,
      category: {
        type: e.target.options[e.target.selectedIndex].value,
        expense:
          e.target.options[e.target.selectedIndex].value !== "earnings"
            ? true
            : false,
        title: e.target.options[e.target.selectedIndex].text
      }
    });
  };

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/categories/");
      setOptions(data);
    })();
  }, []);

  return (
    <form
      onSubmit={submit}
      className="w-full shadow-lg rounded p-5 grid bg-gray-100 grid-cols-5 place-items-center items-end gap-x-5">
      <Field
        label="Data"
        idf="date"
        type="date"
        value={balance.date}
        onChange={e => handleChange(e)}
      />
      <Select
        idf="category"
        onChange={e => handleSelect(e)}
        options={options}
        value={balance.category.type ? balance.category.type : ""}
      />
      <Field
        label="Título"
        idf="title"
        type="text"
        onChange={e => handleChange(e)}
        placeholder="Insira o título..."
        value={balance.title}
      />
      <Field
        label="Valor"
        idf="value"
        type="number"
        onChange={e => handleChange(e)}
        placeholder="Insira o valor..."
        value={balance.value}
        step="0.01"
      />
      <Button type="submit">Adicionar</Button>
    </form>
  );
};
