function panggilangka() {
    var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16 ];
    console.log("sebelumnya:",angka);
    console.log("=======================================================")
    angka = angka.sort();
    return angka

}
var angka2 = panggilangka();
let angka3 = angka2.filter(angka2 =>{
    return angka2 >= 10 ;
});
console.log("ascending:",angka2);
console.log("descending:",angka2.reverse());
console.log(angka3.reverse());
