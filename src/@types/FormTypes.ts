import { InputHTMLAttributes, SelectHTMLAttributes } from "react";

export type FieldInputProps = {
  label: string;
  idf: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type FieldSelectProps = {
  label?: string;
  idf: string;
} & SelectHTMLAttributes<HTMLSelectElement>;
