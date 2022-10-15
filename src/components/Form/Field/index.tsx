import { InputHTMLAttributes } from "react";

type FieldProps = {
  label: string;
  identifier: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Field = ({ identifier, label, ...rest }: FieldProps) => {
  return (
    <fieldset className="grid gap-y-2">
      <label
        className="text-lg font-medium"
        htmlFor={identifier}>
        {label}
      </label>
      <input
        className="rounded px-4 py-2"
        id={identifier}
        name={identifier}
        required
        {...rest}
      />
    </fieldset>
  );
};
