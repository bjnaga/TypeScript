// It combines multiple sections together
type ProductProperties = {
  id: number;
  category: string;
  name: string;
  price: number;
  stock: number;
};

type ProductDiscount = {
  discount(): void;
};
type ProductSeasonalSales = {
  holidaySales(): void;
};
type ProductSubscription = {
  subscription(): void;
};
type ProductShipping = {
  shipping(): void;
};

// in union type either this or that
// but with intersection type its this and that , and is denoted by "&"
type Product = ProductProperties &
  ProductDiscount &
  ProductSeasonalSales &
  ProductSubscription &
  ProductShipping;

const alanWrench: Product = {
  id: 1,
  category: "hardware",
  name: "Alan Wrench",
  price: 12.99,
  stock: 0,
  discount() {},
  holidaySales: () => {},
  subscription() {},
  shipping() {},
};
console.log(alanWrench);
