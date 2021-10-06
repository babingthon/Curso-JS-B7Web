let digitalClock = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock(){
    let dataAtual = new Date();
    let hora = dataAtual.getHours();
    let minunto = dataAtual.getMinutes();
    let segundo = dataAtual.getSeconds();

    digitalClock.innerHTML =  `${fixTime(hora)}:${fixTime(minunto)}:${fixTime(segundo)}`;

    let sDeg = ((360 / 60) * segundo) -90;
    let mDeg = ((360 / 60) * minunto) -90;
    let hDeg = ((360 / 12) * hora) -90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixTime(time) {
    if(time < 10){
        return '0'+time
    } else {
        return time;
    }
}

setInterval(updateClock, 1000);
updateClock();