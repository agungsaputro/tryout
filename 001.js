function gradeNumber(number){
    let outputNumber = ''
    if(number >= 60 && number<70){
        outputNumber = 'D'
    }else if(number >= 70 && number < 80){
        outputNumber = 'C'
    }else if(number >= 80 && number < 90){
        outputNumber = 'B'
    }else if(number < 59){
        outputNumber = 'E'
    }else{
        outputNumber = 'A'
    }
    return outputNumber
}

console.log(gradeNumber(10));
console.log(gradeNumber(80));
console.log(gradeNumber(90));
console.log(gradeNumber(78));
console.log(gradeNumber(62));