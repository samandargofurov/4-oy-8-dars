//  1. Kubning yon uzunligi berilgan hajmni hisoblaydigan funksiyani yozing.

// function kubningHajmi(arg) {
//     return arg ** 3;
// }

// let res = kubningHajmi(3);
// console.log(res);

//  2. Satrda ma'lum bir belgi bor yoki yo'qligini tekshiradigan funktsiyani aniqlang.



//  3. Massivdagi birinchi N natural sonni qaytaruvchi funksiya yarating.



//  4. Sondagi raqamlar yig‘indisini hisoblaydigan funksiya ishlab chiqing.

// function raqamlarYigindisi(number) {
//   let sum = 0;
//   for (let i = 0; number; i++) {
//     sum += number % 10;
//     number = Math.trunc(number / 10);
//   }
//   return sum;
// }

// let res = raqamlarYigindisi(12345);
// console.log(res);

//  5. Yilning kabisa yili ekanligini tekshiradigan funksiyani aniqlang.

// const kabisaYili = (year) => {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let res = kabisaYili(10000);
// console.log(res);

//  6. Belgilangan ikkita qiymat orasida tasodifiy son hosil qiluvchi funksiya yarating.



//  7. To‘g‘ri to‘rtburchakning kengligi va balandligini hisobga olgan holda uning maydonini hisoblaydigan funksiya ishlab chiqing.



//  8. Farengeytni Selsiyga aylantiruvchi funksiyani aniqlang.

// const selsiygaAylantirish = (K) => {
//     return Math.floor((K - 32) / 1.8);
// }

// console.log(selsiygaAylantirish(100));

//  9. Uchburchakning teng yonli, teng yonli yoki masshtabli ekanligini tekshiradigan funksiya yarating.



//  10. Ikki sonning minimalini topuvchi funksiya ishlab chiqing

// const sonningMinimali = (a, b) => {
//     let min;
//     if (a > b) {
//         min = b;
//     } else {
//         min = a;
//     }
//      return min
// }

// let res = sonningMinimali(12, 5);
// console.log(res);

//  11. Doira radiusi berilgan doiraning maydonini hisoblaydigan funksiyani aniqlang.

// const doiraningYuzi = (R) => {
//     return Math.trunc(3.14 * R ** 2);
// }

// let res = doiraningYuzi(3);
// console.log(res);

//  12. Satrning palindrom ekanligini tekshiradigan funksiya yarating (tinish belgilariga e’tibor bermay).

const palindrom = (arg) {

}

let res = palindrom("arra");
console.log(res);

//  13. Silindrning radiusi va balandligini hisobga olgan holda uning hajmini hisoblaydigan funksiyani ishlab chiqing.

// const silindrHajmi = (R, H) => {
//     return Math.trunc(H * 3.14 * R ** 2);
// }

// let res = silindrHajmi(2, 5);
// console.log(res);

//  14. To‘g‘ri to‘rtburchak ichida nuqta yotishini tekshiradigan funksiyani aniqlang.



//  15. Alifboning tasodifiy harfini hosil qiluvchi funksiya yarating.

// const AlifboningTasodifiyHarfi = () => {
//     let alphabet = "abcdefghijklmnopqrstuvwxyz";
//     let random = Math.floor(Math.random() * alphabet.length);

//     return alphabetRandom = alphabet[random];
// }

// console.log(AlifboningTasodifiyHarfi());

//  16. Uchburchakning tomonlari uzunliklari berilgan perimetrini hisoblaydigan funksiyani ishlab chiqing.

// const uchburchakningTomonlarUzunligi = (a, b, c) => {
//     return a + b + c;
// }

// console.log(uchburchakningTomonlarUzunligi(12, 3, 5));

//  17. Sonning toq mukammal kvadrat ekanligini tekshiradigan funksiyani aniqlang.



//  18. Belgilangan ikkita qiymat orasida tasodifiy juft son hosil qiluvchi funksiya yarating.



//  19. Konusning radiusi va balandligini hisobga olgan holda uning hajmini hisoblaydigan funktsiyani tuzing.

// const konusningHajmi = (R, H) => {
//     return 1 / 3 * 3,14 * R ** 2 * H
// }

// console.log(konusningHajmi(5, 12));

//  20. Satrning haqiqiy telefon raqami ekanligini tekshiradigan funksiyani aniqlang (asosiy formatni tekshirish).
