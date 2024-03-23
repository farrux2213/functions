//problem1
// var wild_animals = function () {
//   var animals = {
//     bear: {
//       color: "brown",
//       weight: 300,
//     },
//     lion: {
//       color: "yellow",
//       weight: 150,
//     },
//   };
//   //create
//   animals["wolf"] = {
//     color: "black",
//     weight: 100,
//   };

//   //update
//   animals.lion.weight = 200;

//   //delete
//   delete animals.bear;

// console.log(animals);
// };

// wild_animals();

//problem2
// class Item {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// class ShoppingCart {
//     constructor() {
//         this.items = [];
//     }

//     addItem(item, quantity = 1) {
//         for (let i = 0; i < quantity; i++) {
//             this.items.push(item);
//         }
//     }

//     removeItem(item, quantity = 1) {
//         for (let i = 0; i < quantity; i++) {
//             const index = this.items.findIndex(cartItem => cartItem === item);
//             if (index !== -1) {
//                 this.items.splice(index, 1);
//             } else {
//                 console.log(`${item.name} not found in the cart.`);
//             }
//         }
//     }

//     calculateTotal() {
//         let total = 0;
//         this.items.forEach(item => {
//             total += item.price;
//         });
//         return total;
//     }
// }

// // Sample usage
// const item1 = new Item("Shirt", 20);
// const item2 = new Item("Pants", 30);

// const cart = new ShoppingCart();

// cart.addItem(item1);
// cart.addItem(item2, 2);

// console.log("Items in the cart:");
// cart.items.forEach(item => {
//     console.log(`${item.name}: $${item.price}`);
// });

// console.log("Total cost:", cart.calculateTotal());

// cart.removeItem(item1);
// console.log("\nAfter removing an item:");
// cart.items.forEach(item => {
//     console.log(`${item.name}: $${item.price}`);
// });

// console.log("Total cost:", cart.calculateTotal());

//problem3
// function talabalar() {
//   var oquvchilar = {
//     talaba_one: {
//       name: "Umar",
//       age: 20,
//       kursi: 2,
//     },
//     talaba_two: {
//       name: "Fozil",
//       age: 20,
//       kursi: 2,
//     },
//     talaba_three: {
//       name: "Fotih",
//       age: 25,
//       kursi: 4,
//     },
//   };
//   Object.freeze(oquvchilar);
//   //create
//   oquvchilar.talaba_four = {
//     name: "Muso",
//     age: 18,
//     kursi: 1,
//   };

//   //delete
//   delete oquvchilar.talaba_two;

//   console.log(oquvchilar);
// }
// talabalar();
//===========================================================================
//problem4
// function shaxsMalumoti(ism, yosh, jins) {
//   var shaxs = {
//     ism: ism,
//     yosh: yosh,
//     jins: jins,
//   };
//   return shaxs;
// }

// var shaxs1 = shaxsMalumoti("Farrukh", 18, "erkak");
// console.log(shaxs1);
//=============================================================================
//problem5
// var bank = {
//   8888: {
//     balans: 20.0,
//   },
//   9999: {
//     balans: 30.0,
//   },
// };

// function pulYechish(one, two, three) {
//   if (bank[three]) {
//     if (one === "minusMoney") {
//       bank[three].balans -= two;
//     } else {
//       bank[three].balans += two;
//     }
//   } else {
//     console.log("Bunday hisob raqam yoq!");
//   }
// }
// pulYechish("minusMoney", 7.0, 8888);

// console.log(bank);
//======================================================================================
// problem6
// let kutubxona = {
//   kitob1: "Abu Ali Ibn Sinoning Shifo nomli Kitobi",
//   kitob2: "Dunyoviy Qarashlar kitobi",
//   kitob3: "Al-Xorazmiy Hisobot Kitobi",
//   kitob4: "Farobiyning kitobi",
// };

// function ochirilganKitoblar() {
//   //kitob qoshish
//   kutubxona.kitob5 = "Super Matematika";

//   //delete
//   delete kutubxona.kitob1;
//   delete kutubxona.kitob2;

//   // O'chirilgan kitoblarni alohida obyektga joylash
//   let ochirilganKitoblar = {
//     kitob1: kutubxona.kitob1,
//     kitob2: kutubxona.kitob2,
//   };

//   // O'zini obyektga qaytarish
//   return ochirilganKitoblar;
// }

// // Natijani konsolga chiqaramiz
// console.log(ochirilganKitoblar());

// console.log(kutubxona);

for (let i = 0; i < 20; i++) {
  console.log(i);
}
