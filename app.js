
var oyun = {
    sira: 'X',
    hareket: 0,
    karakter: ['X','O']
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
    
    for( let x=0; x<3; x++ ){
        elemanlar[x] = document.getElementsByClassName("oyunSatir").item(0).children[x].innerHTML ;
    }
    for( let y=0; y<3; y++ ){
        elemanlar[y+3] = document.getElementsByClassName("oyunSatir").item(1).children[y].innerHTML;
    }
    for( let z=0; z<3; z++ ){
        elemanlar[z+6] = document.getElementsByClassName("oyunSatir").item(2).children[z].innerHTML;
    }
    kazanan();
}

function kazanan(){
    if(
        elemanlar[0] == elemanlar[1] && elemanlar[1] == elemanlar[2] && elemanlar[0] != ""
    ) {
        fisek();
    }
    else if(
        elemanlar[3] == elemanlar[4] && elemanlar[4] == elemanlar[5] && elemanlar[3] != ""
    ) {
        fisek();
    }
    else if(
        elemanlar[6] == elemanlar[7] && elemanlar[7] == elemanlar[8] && elemanlar[6] != ""
    ) {
        console.log(elemanlar[6]);
        fisek();
    }
    else if(
        elemanlar[0] == elemanlar[4] && elemanlar[4] == elemanlar[8] && elemanlar[0] != ""
    ) {
        fisek();
    }
    else if(
        elemanlar[2] == elemanlar[4] && elemanlar[4] == elemanlar[6] && elemanlar[2] != ""
    ) {
        fisek();
    }
    else if(
        elemanlar[0] == elemanlar[3] && elemanlar[3] == elemanlar[6] && elemanlar[0] != ""
    ) {
        fisek();
    }
    else if(
        elemanlar[1] == elemanlar[4] && elemanlar[4] == elemanlar[7] && elemanlar[1] != ""
    ) {
        fisek();
    }
    else if(
        elemanlar[2] == elemanlar[5] && elemanlar[5] == elemanlar[8] && elemanlar[2] != ""
    ) {
        fisek();
    }
    else if(
        oyun.hareket == 9
    ) berabere();
}

function fisek(){
    window.alert("KAZANDIN!");
}
function berabere(){
    window.alert("BERABERE!");
}