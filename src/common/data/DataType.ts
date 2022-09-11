export interface DataItemsType {
  id: number;
  farms: string;
  quantity: number;
  name: string;
  ingredients: {
    thc: string;
    cbd: string;
  };
  info: string;
  priceInDollarPerGram: string;
}
export interface DataType {
  category: string;
  items: DataItemsType[];
}
