function rekursif(num){
    if (num === 0) {
        return;
    }
    console.log(num);
    rekursif(num-1);
}
 
rekursif(20);