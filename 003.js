var number = [];
var total = 0;

for (var i = 1; i <= 100; i++) {
    number.push(Math.floor(Math.random() * 100) + 1);
}

for(var j = 0; j < number.length; j++) {
    total += number[j];
}

var average = total / number.length;
console.log(number);
console.log('Nilai Maksimal = '+ Math.max(...number));
console.log('Nilai Minimum ='+ Math.min(...number));
console.log('Nilai Rata-Rata = '+ average);