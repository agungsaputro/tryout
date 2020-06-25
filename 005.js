function leapYear(dari, ke) {
    let output = ''

    for(let i = dari; i <= ke; i++) {
        if((i % 4) == 0) {
            output += `${i} adalah tahun kabisat \n`
        } else {
            output += `${i} adalah bukan tahun kabisat \n`
        }
    }

    return output
}

console.log(leapYear(1600, 2020))