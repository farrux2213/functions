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
//================================================================================
//problem2
// function shop() {
//   var shopping = {
//     apple: {
//       dona: 20,
//       narxi: 700,
//     },
//     orange: {
//       dona: 10,
//       narxi: 1300,
//     },
//     watermelon: {
//       dona: 2,
//       narxi: 15000,
//     },
//   };
//   //create
//   shopping.pear = {
//     dona: 7,
//     narxi: 5000,
//   };
//   //delete
//   delete shopping.orange;
//   //calculation
//   // ???????????????????????????????????????????????????????????????
//   console.log(shopping);
// }
// shop();
//=================================================================================
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
console.log("problem 6 ni ohrida tushinmochilik bor");
