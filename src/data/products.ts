export type Product = {
  id: string;
  name: string;
  description: string;
  price: number; // in CLP for example
  currency?: string; // optional ISO code
};

export const products: readonly Product[] = [
  { id: "p-1", name: "Lorem ipsum 1", description: "Lorem ipsum dolor sit amet, consectetur.", price: 12990, currency: "CLP" },
  { id: "p-2", name: "Lorem ipsum 2", description: "Sed do eiusmod tempor incididunt.", price: 15990, currency: "CLP" },
  { id: "p-3", name: "Lorem ipsum 3", description: "Ut labore et dolore magna aliqua.", price: 9990, currency: "CLP" },
  { id: "p-4", name: "Lorem ipsum 4", description: "Ut enim ad minim veniam.", price: 18990, currency: "CLP" },
  { id: "p-5", name: "Lorem ipsum 5", description: "Quis nostrud exercitation ullamco.", price: 24990, currency: "CLP" },
  { id: "p-6", name: "Lorem ipsum 6", description: "Laboris nisi ut aliquip ex ea.", price: 11990, currency: "CLP" },
  { id: "p-7", name: "Lorem ipsum 7", description: "Commodo consequat duis aute.", price: 20990, currency: "CLP" },
  { id: "p-8", name: "Lorem ipsum 8", description: "Irure dolor in reprehenderit.", price: 17990, currency: "CLP" }
];
