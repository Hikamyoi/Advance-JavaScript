/*
function calculateDiscountedPrice(price,discountPercent){
    return price - (price * discountPercent) / 100;
} 
*/

//Latihan 1.2 — Menaikkan Tingkat Kesulitan
const cart = [
  { title: "Laptop", price: 1000, discountPercent: 10 },
  { title: "Mouse", price: 20, discountPercent: 5 },
  { title: "Keyboard", price: 50, discountPercent: 0 },
];

function applyDiscounts(cart) {
  const result = [];

  for (const item of cart) {
    const potongan = (item.price * item.discountPercent) / 100;
    const hargaAkhir = item.price - potongan;

    result.push({
      title: item.title,
      finalPrice: hargaAkhir,
    });
  }

  return result;
}

console.log(applyDiscounts(cart));
