import { Field } from "./Field";

export const Form = () => {
  return (
    <form className="w-full shadow-lg rounded p-5 grid bg-gray-100 place-items-center grid-cols-5">
      <Field
        identifier="date"
        type="date"
        label="Data"
      />
      <Field
        identifier="date"
        type="date"
        label="Data"
      />
      <Field
        identifier="date"
        type="date"
        label="Data"
      />
      <Field
        identifier="date"
        type="date"
        label="Data"
      />
      <button type="submit"></button>
    </form>
  );
};
