import { Categories } from "../@types/CategoriesTypes";

export const categories: Categories[] = [
  {
    type: "food",
    title: "Alimentação",
    expense: true
  },
  {
    type: "bills",
    title: "Contas",
    expense: true
  },
  {
    type: "subscription",
    title: "Assinaturas",
    expense: true
  },
  {
    type: "earnings",
    title: "Ganhos",
    expense: false
  }
];
