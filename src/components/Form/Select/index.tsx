import { FieldSelectProps } from "../../../@types/FormTypes";

export const Select = ({ options, idf, ...rest }: FieldSelectProps) => {
  return (
    <fieldset className="grid gap-y-2">
      <label
        className="text-lg font-medium"
        htmlFor={idf}>
        Categoria
      </label>
      <select
        className="rounded px-4 py-2"
        id={idf}
        name={idf}
        {...rest}>
        <option>Selecione uma opção</option>
        {options.map(opt => (
          <option
            key={opt.type}
            value={opt.type}>
            {opt.title}
          </option>
        ))}
      </select>
    </fieldset>
  );
};
