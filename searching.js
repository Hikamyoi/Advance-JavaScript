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

// 6.1 - linear search generik
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

// 6.2 - terapkan pola linear search untuk cari produk berdasarkan id
function searchProductById(products, targetId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === targetId) {
      return i;
    }
  }
  return -1;
}

// contoh pemakaian
const index = searchProductById(products, 2);
console.log(index); // 1

if (index !== -1) {
  console.log(products[index]); // object Smartphone lengkap
} else {
  console.log("Produk tidak ditemukan");
}
