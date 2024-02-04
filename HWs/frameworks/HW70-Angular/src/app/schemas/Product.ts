import { IProduct } from '../interfaces/IProduct';

export class Product implements IProduct {
  constructor(
    private label: string,
    private description: string,
    private price: number,
    private date: Date,
    private hasDiscount: boolean,
    private discount: number | null
  ) {}

  getLabel = (): string => {
    return this.label;
  };

  getDescription = (): string => {
    return this.description;
  };

  getPrice = (): string => {
    return this.price.toFixed(2);
  };

  getDate = (): Date => {
    return this.date;
  };

  getHasDiscount = (): boolean => {
    return this.hasDiscount;
  };

  getDiscount = (): number | null => {
    return this.discount;
  };

  getDiscountPrice = (): string => {
    return (this.price - (this.price * this.discount) / 100).toFixed(2);
  };
}
