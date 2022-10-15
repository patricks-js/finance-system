import { Categories } from "../@types/CategoriesTypes";

export const categories: Categories = {
  food: {
    type: "food",
    title: "Alimentação",
    expensive: true
  },
  bills: {
    type: "bills",
    title: "Contas",
    expensive: true
  },
  subscription: {
    type: "subscription",
    title: "Assinaturas",
    expensive: true
  },
  earnings: {
    type: "earnings",
    title: "Ganhos",
    expensive: false
  }
};
