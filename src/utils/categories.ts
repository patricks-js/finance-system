import { Categories } from "../@types/CategoriesTypes";

export const categories: Categories = {
  food: {
    type: "food",
    title: "Alimentação",
    expense: true
  },
  bills: {
    type: "bills",
    title: "Contas",
    expense: true
  },
  subscription: {
    type: "subscription",
    title: "Assinaturas",
    expense: true
  },
  earnings: {
    type: "earnings",
    title: "Ganhos",
    expense: false
  }
};
