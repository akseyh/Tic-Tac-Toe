var oyun = {
    sira: '',
    hareket: 0,
    karakter: ['X','O']
}



function tikla(alan){
    oyun.sira = oyun.karakter[oyun.hareket%2];
    oyun.hareket++;
    if(oyun.sira === 'X'){
        document.getElementById(alan).className = "oyunAlani fa fa-times";
        document.getElementById("cerceve").style = "left:75px;";
    }
    else if(oyun.sira === 'O'){
        document.getElementById(alan).className = "oyunAlani far fa-circle";
        document.getElementById("cerceve").style = "left:13px";
    }
    kontrol();
} 


let elemanlar = [];
function kontrol(){
    
    for( let x=0; x<3; x++ ){
        elemanlar[x] = document.getElementsByClassName("oyunSatir").item(0).children[x].className ;
    }
    for( let y=0; y<3; y++ ){
        elemanlar[y+3] = document.getElementsByClassName("oyunSatir").item(1).children[y].className;
    }
    for( let z=0; z<3; z++ ){
        elemanlar[z+6] = document.getElementsByClassName("oyunSatir").item(2).children[z].className;
    }
    kazanan();
}

function kazanan(){
    if(
        elemanlar[0] == elemanlar[1] && elemanlar[1] == elemanlar[2] && elemanlar[0] != "oyunAlani" && elemanlar[1] != "oyunAlani" && elemanlar[2] != "oyunAlani"
    ) {
        fisek();
    }
    if(
        elemanlar[3] == elemanlar[4] && elemanlar[4] == elemanlar[5] && elemanlar[3] != "oyunAlani" && elemanlar[4] != "oyunAlani" && elemanlar[5] != "oyunAlani"
    ) {
        fisek();
    }
    if(
        elemanlar[6] == elemanlar[7] && elemanlar[7] == elemanlar[8] && elemanlar[6] != "oyunAlani" && elemanlar[7] != "oyunAlani" && elemanlar[8] != "oyunAlani"
    ) {
        console.log(elemanlar[6]);
        fisek();
    }
    if(
        elemanlar[0] == elemanlar[4] && elemanlar[4] == elemanlar[8] && elemanlar[0] != "oyunAlani" && elemanlar[4] != "oyunAlani" && elemanlar[8] != "oyunAlani"
    ) {
        fisek();
    }
    if(
        elemanlar[2] == elemanlar[4] && elemanlar[4] == elemanlar[6] && elemanlar[2] != "oyunAlani" && elemanlar[4] != "oyunAlani" && elemanlar[6] != "oyunAlani"
    ) {
        fisek();
    }
    if(
        elemanlar[0] == elemanlar[3] && elemanlar[3] == elemanlar[6] && elemanlar[0] != "oyunAlani" && elemanlar[3] != "oyunAlani" && elemanlar[6] != "oyunAlani"
    ) {
        fisek();
    }
    if(
        elemanlar[1] == elemanlar[4] && elemanlar[4] == elemanlar[7] && elemanlar[1] != "oyunAlani" && elemanlar[4] != "oyunAlani" && elemanlar[7] != "oyunAlani"
    ) {
        fisek();
    }
    if(
        elemanlar[2] == elemanlar[5] && elemanlar[5] == elemanlar[8] && elemanlar[2] != "oyunAlani" && elemanlar[5] != "oyunAlani" && elemanlar[8] != "oyunAlani"
    ) {
        fisek();
    }
    if(
        elemanlar[0] != "oyunAlani" && elemanlar[1] != "oyunAlani" && elemanlar[2] != "oyunAlani" && elemanlar[3] != "oyunAlani" && elemanlar[4] != "oyunAlani" && elemanlar[5] != "oyunAlani" && elemanlar[6] != "oyunAlani" && elemanlar[7] != "oyunAlani" && elemanlar[8] != "oyunAlani"
    ) berabere();
}

function fisek(a){
    console.log("KAZANDIN!");
}
function berabere(){
    console.log("BERABERE!");
}