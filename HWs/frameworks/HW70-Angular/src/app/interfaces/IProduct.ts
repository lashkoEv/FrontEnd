export interface IProduct {
  getLabel: () => string;
  getDescription: () => string;
  getPrice: () => number;
  getDate: () => Date;
  getHasDiscount: () => boolean;
  getDiscount: () => number | null;
  getDiscountPrice: () => string;
}
