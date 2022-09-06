export type ProductIngredients = Array<string>


export interface Product {
  name: string;
  price:number;
  ingredients: ProductIngredients;
}
