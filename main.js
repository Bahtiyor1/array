let arr = ['Olma', 'Banan', 'Gilos', 'Shaftoli'];

console.log(arr);
alert('Boshlanishida Arryning uzunligi: 4');

let con = confirm('Sizning arrayingizdan malumotlarni olib tashlamoqchimiz');

if (con) {
    arr.pop();
    console.log(arr);
} else {
    console.log(arr);
}
