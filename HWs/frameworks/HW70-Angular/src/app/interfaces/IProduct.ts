export interface IProduct {
  getLabel: () => string;
  getDescription: () => string;
  getPrice: () => string;
  getDate: () => Date;
  getHasDiscount: () => boolean;
  getDiscount: () => number | null;
  getDiscountPrice: () => string;
}
