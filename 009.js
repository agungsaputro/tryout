function removeDuplicate(data) {
    let array = [];

    for(let value of data) {
        if(array.indexOf(value) === -1) {
            array.push(value);
        }
    }

    return array;
}

var data = ["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", 
    "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"];

console.log(removeDuplicate(data));