// Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = 5;
// if (x !==0) {
//     console.log("true")
// } else {
//     console.log("false")
// }
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +prompt("????")
// if (time >= 15) {
//     console.log(1)
// }
// if (time >= 30) {
//     console.log(2)
// }
// if (time >= 45) {
//     console.log(3)
// }
// if (time >= 59) {
//     console.log(4)
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = +prompt("???")
// if (day >= 10){
//     console.log("first")
// }
// if (day >= 20){
//     console.log("second")
// }
// if (day >= 31){
//     console.log("third")
// }


// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською)
// switch ('day 1') {
//     case 'day 1':
//         console.log('read a book')
//         break;
//     case 'day 2' :
//         console.log('cook')
//         break;
//     case 'day 3' :
//         console.log('read a book')
//         break;
//     case 'day 4' :
//         console.log('cook')
//         break;
//     case 'day 5' :
//         console.log('read a book')
//         break;
//     case 'day 6' :
//         console.log('cook')
//         break;
//     case 'day 7' :
//         console.log('read a book')
//
// }

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
// let a =+prompt('number1')
// let b =+prompt('number2')
// if (a<b){
//     console.log(b)
// }

// є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x = prompt() || "default";
console.log(x);




