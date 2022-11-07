import { FieldInputProps } from "../../../@types/FormTypes";

export const Field = ({ idf, label, ...rest }: FieldInputProps) => {
  return (
    <fieldset className="grid gap-y-2">
      <label
        className="text-lg font-medium"
        htmlFor={idf}>
        {label}
      </label>
      <input
        className={"rounded px-4 py-2 w-full"}
        id={idf}
        name={idf}
        required
        {...rest}
      />
    </fieldset>
  );
};
