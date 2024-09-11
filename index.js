// Мінімум

// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let addition = parseFloat((0.1 + 0.2).toFixed(2));
console.log(addition);


// 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
let a = "1";
let b = 2;
let result = parseFloat(a) + (b);
console.log(result);


// 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
let fleshDriveSizeGb = prompt("Вкажіть який обсяг флешки в Гб");
let fleshDriveSizeMb = fleshDriveSizeGb * 1024;
let fleshSizeMb = 820;
let fileCount = Math.floor(fleshDriveSizeMb/820);
console.log(`На флешку розміром ${fleshDriveSizeGb}Гб поміщується ${fileCount} файлів розміром 820Мб`);



// Норма

// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
let sum = prompt("Вкажи, яка сума гривень в тебе в гаманці");
let priceOfChocolate = prompt("Введи ціну однієї шоколадки");
let numberOfChocolate = Math.floor(sum / priceOfChocolate);
let rest = Math.floor(sum - (priceOfChocolate * numberOfChocolate));
console.log(`Ти можуш купити ${numberOfChocolate} шоколадок та в тебе залишиться ${rest}грн.`);


// 2. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

let number = prompt("Введи тризначне число");

let hundred = Math.floor(number / 100);
let tens = Math.floor((number % 100) / 10);
let ones = number % 10;

let reverseNumber = ones * 100 + tens * 10 + hundred;
console.log(`Виводжу число ${number} задом наперед ${reverseNumber}`);



// Максимум

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
// Що повернуть вирази:
 2 && 0 && 3      
console.log(0);

 2 || 0 || 3       
console.log(2);

2 && 0 || 3       
console.log(3);
