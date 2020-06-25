function palindrom (str) {
    var yes = "true";
    var no = "false";
    
    var revStr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var count = 0;
        //Cek apakah string kosong atau tidak
        if (revStr==="") {
            console.log("Nothing found");
            return false;
        }
        if ((revStr.length) % 2 === 0) {
            count = (revStr.length) / 2;
        } else {
            if (revStr.length === 1) {
                console.log(yes);
                return true;
            } else {
                count = (revStr.length - 1) / 2;
            }
        }
        for (var i = 0; i < count; i++) {
            if (revStr[i] != revStr.slice(-1-i)[0]) {
                console.log(no);
                return false;
            }
        }
    console.log(yes);
    return true;
}

palindrom('Cigar? Toss it in a can. It is so tragic'); 
palindrom('I did, did I?');
palindrom('Red rum, sir, is murder');
palindrom('Eva, can I see bees in a cave?');
palindrom('Hello World');
palindrom('agung');