import { categoriesData1 } from "./tools/categoriesData1";
import { categoriesData2 } from "./tools/categoriesData2";
import { categoriesData3 } from "./tools/categoriesData3";
import { categoriesData4 } from "./tools/categoriesData4";  

const categories = [categoriesData1, categoriesData2, categoriesData3, categoriesData4];

export interface Tool {
  name: string;
  description: string;
  icon: string;
  link: string;
}

export interface Category {
  id: string;
  title: string;
  tools: Tool[];
}

export const categoriesDatas: Category[] = [];

categories.forEach((category) => {
  categoriesDatas.push(category);
});
