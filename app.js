var oyun = {
    sira: 'X',
    hareket: 0,
    karakter: ['X','O'],
    x: 0,
    o: 0,
    draws: 0
}

function tikla(alan){
    if( document.getElementById(alan).innerHTML == "" ){
        document.getElementById(alan).innerHTML = oyun.sira;
        oyun.hareket++;
        oyun.sira = oyun.karakter[oyun.hareket%2];
    }
    kontrol();
} 

let elemanlar = [];
function kontrol(){
    for( let x=0; x<3; x++ )
        elemanlar[x] = document.getElementsByClassName("oyunSatir").item(0).children[x].innerHTML ;
    for( let y=0; y<3; y++ )
        elemanlar[y+3] = document.getElementsByClassName("oyunSatir").item(1).children[y].innerHTML;
    for( let z=0; z<3; z++ )
        elemanlar[z+6] = document.getElementsByClassName("oyunSatir").item(2).children[z].innerHTML;
    kazanan();
}

function kazanan(){
    if(
        (elemanlar[0] == elemanlar[1] && elemanlar[1] == elemanlar[2] && elemanlar[0] != "") ||
        (elemanlar[3] == elemanlar[4] && elemanlar[4] == elemanlar[5] && elemanlar[3] != "") ||
        (elemanlar[6] == elemanlar[7] && elemanlar[7] == elemanlar[8] && elemanlar[6] != "") ||
        (elemanlar[0] == elemanlar[4] && elemanlar[4] == elemanlar[8] && elemanlar[0] != "") ||
        (elemanlar[2] == elemanlar[4] && elemanlar[4] == elemanlar[6] && elemanlar[2] != "") ||
        (elemanlar[0] == elemanlar[3] && elemanlar[3] == elemanlar[6] && elemanlar[0] != "") ||
        (elemanlar[1] == elemanlar[4] && elemanlar[4] == elemanlar[7] && elemanlar[1] != "") ||
        (elemanlar[2] == elemanlar[5] && elemanlar[5] == elemanlar[8] && elemanlar[2] != "")
    ) fisek();
    else if( oyun.hareket == 9 ) berabere();
}

function sifirla(){
    for( let x=0; x<9; x++ )
        elemanlar[x] = "";
    for( let x=0; x<3; x++ )
        document.getElementsByClassName("oyunSatir").item(0).children[x].innerHTML = "";
    for( let y=0; y<3; y++ )
        document.getElementsByClassName("oyunSatir").item(1).children[y].innerHTML = "";
    for( let z=0; z<3; z++ )
        document.getElementsByClassName("oyunSatir").item(2).children[z].innerHTML = "";

    oyun.hareket = 0;
    oyun.sira = 'X'

}

function fisek(){
    if(oyun.sira == 'X')
        oyun.o++;
    else oyun.x++;
    sifirla();
    document.getElementById("xWin").innerHTML = oyun.x + " win";
    document.getElementById("oWin").innerHTML = oyun.o + " win";
}
function berabere(){
    oyun.draws++;
    sifirla();
    document.getElementById("draws").innerHTML = oyun.draws + " draws";

}