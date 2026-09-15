const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" },
    ],
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" },
    ],
  },
];

// 1
const allTagsNested = products.map((product) => product.tags);
console.log("1. All Tags (nested):", allTagsNested);

// 2
function findProductsByTag(products, tag) {
  return products.filter((product) => product.tags.includes(tag));
}
console.log(
  "2. Produk dengan tag 'electronics':",
  findProductsByTag(products, "electronics"),
);

// 3
const reviewCounts = products.map((product) => ({
  id: product.id,
  title: product.title,
  totalReviews: product.reviews.length,
}));
console.log("3. Jumlah Review per Produk:", reviewCounts);

// 4
const fiveStarReviews = products.flatMap((product) =>
  product.reviews.filter((review) => review.rating === 5),
);
console.log("4. Review Rating 5:", fiveStarReviews);

// 5
const avgRatingPerProduct = products.map((product) => {
  const total = product.reviews.reduce((sum, review) => sum + review.rating, 0);
  const average = total / product.reviews.length;
  return { id: product.id, title: product.title, averageRating: average };
});
console.log("5. Rata-rata Rating per Produk:", avgRatingPerProduct);

// 6
const mostReviewedProduct = products.reduce((champion, current) =>
  current.reviews.length > champion.reviews.length ? current : champion,
);
console.log("6. Produk dengan Review Terbanyak:", mostReviewedProduct.title);

// 7
const allReviewRatings = products.flatMap((product) =>
  product.reviews.map((review) => review.rating),
);
console.log("7. Semua Rating Review (flat):", allReviewRatings);
