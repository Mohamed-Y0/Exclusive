export type ProductApiResponse = {
  products: ProductTypes[];
  total: number;
  skip: number;
  limit: number;
};

export interface ProductTypes {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string; // ISO
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string; // ISO
    updatedAt: string; // ISO
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
}

export interface CartItem extends ProductTypes {
  quantity: number;
}

export const categoryGroups = [
  {
    slug: "mens",
    label: "Men",
    items: ["mens-shirts", "mens-shoes", "mens-watches", "sunglasses"],
  },
  {
    slug: "womens",
    label: "Women",
    items: [
      "womens-dresses",
      "womens-bags",
      "womens-shoes",
      "womens-watches",
      "womens-jewellery",
      "tops",
    ],
  },
  {
    slug: "beauty",
    label: "Beauty",
    items: ["beauty", "skin-care", "fragrances"],
  },
  {
    slug: "electronics",
    label: "Electronics",
    items: ["smartphones", "laptops", "tablets", "mobile-accessories"],
  },
  {
    slug: "home",
    label: "Home",
    items: ["furniture", "home-decoration", "kitchen-accessories", "groceries"],
  },
  { slug: "sports", label: "Sports", items: ["sports-accessories"] },
  { slug: "motors", label: "Motors", items: ["motorcycle", "vehicle"] },
];
