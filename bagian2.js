const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "Smartwatch", price: 250, category: "wearables", stock: 20 },
  { id: 5, title: "Tablet", price: 600, category: "tablets", stock: 10 },
  {
    id: 6,
    title: "Bluetooth Speaker",
    price: 80,
    category: "audio",
    stock: 25,
  },
  {
    id: 7,
    title: "Gaming Mouse",
    price: 45,
    category: "accessories",
    stock: 30,
  },
  {
    id: 8,
    title: "Mechanical Keyboard",
    price: 90,
    category: "accessories",
    stock: 18,
  },
  {
    id: 9,
    title: "Monitor 24 inch",
    price: 220,
    category: "monitors",
    stock: 12,
  },
  {
    id: 10,
    title: "Monitor 27 inch 4K",
    price: 400,
    category: "monitors",
    stock: 8,
  },
  {
    id: 11,
    title: "External SSD 1TB",
    price: 130,
    category: "storage",
    stock: 22,
  },
  {
    id: 12,
    title: "External HDD 2TB",
    price: 90,
    category: "storage",
    stock: 17,
  },
  { id: 13, title: "Webcam HD", price: 60, category: "accessories", stock: 27 },
  {
    id: 14,
    title: "Wireless Earbuds",
    price: 150,
    category: "audio",
    stock: 14,
  },
  {
    id: 15,
    title: "Router WiFi 6",
    price: 180,
    category: "networking",
    stock: 9,
  },
  {
    id: 16,
    title: "Power Bank 20000mAh",
    price: 55,
    category: "accessories",
    stock: 35,
  },
  {
    id: 17,
    title: "Smart TV 43 inch",
    price: 500,
    category: "electronics",
    stock: 6,
  },
  {
    id: 18,
    title: "Smart TV 55 inch",
    price: 750,
    category: "electronics",
    stock: 4,
  },
  { id: 19, title: "Drone Mini", price: 320, category: "gadgets", stock: 7 },
  {
    id: 20,
    title: "Action Camera",
    price: 280,
    category: "cameras",
    stock: 11,
  },
  { id: 21, title: "DSLR Camera", price: 950, category: "cameras", stock: 3 },
  {
    id: 22,
    title: "Printer Inkjet",
    price: 140,
    category: "office",
    stock: 13,
  },
  {
    id: 23,
    title: "Laptop Stand",
    price: 35,
    category: "accessories",
    stock: 40,
  },
  { id: 24, title: "USB-C Hub", price: 40, category: "accessories", stock: 32 },
  {
    id: 25,
    title: "Gaming Chair",
    price: 220,
    category: "furniture",
    stock: 8,
  },
  { id: 26, title: "Office Desk", price: 300, category: "furniture", stock: 5 },
  { id: 27, title: "VR Headset", price: 400, category: "gadgets", stock: 9 },
  {
    id: 28,
    title: "Smart Doorbell",
    price: 120,
    category: "smart-home",
    stock: 16,
  },
  {
    id: 29,
    title: "Robot Vacuum",
    price: 350,
    category: "smart-home",
    stock: 10,
  },
  {
    id: 30,
    title: "Portable Projector",
    price: 260,
    category: "electronics",
    stock: 6,
  },
];

// Latihan 2.1
function findProductById(products, id) {
  return products.find((product) => product.id === id);
}

// Latihan 2.2
function getLowStockProducts(products) {
  return products.filter((product) => product.stock < 10);
}

// Latihan 2.3
function updateStock(products, id, newStock) {
  return products.map((p) => (p.id === id ? { ...p, stock: newStock } : p));
}

// Contoh test
console.log(findProductById(products, 3));
console.log(getLowStockProducts(products));
console.log(updateStock(products, 3, 50));
