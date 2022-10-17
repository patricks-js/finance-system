import { InputHTMLAttributes, SelectHTMLAttributes } from "react";

import { OptionsTypes } from "./OptionsTypes";

export type FieldInputProps = {
  label: string;
  idf: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type FieldSelectProps = {
  label?: string;
  idf: string;
  options: OptionsTypes[];
} & SelectHTMLAttributes<HTMLSelectElement>;
