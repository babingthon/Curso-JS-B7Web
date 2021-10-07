const keyApi = '481ca74d60080994d929d00f715755ad';

document.querySelector('.busca').addEventListener('submit', async (e)=>{
    e.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input !== ''){
        clearHTML();
        showAviso('Carregando...');

        let url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=${keyApi}&units=metric&lang=pt_br`;

        let result = await fetch(url);
        let resp = await result.json();

        if(resp.cod === 200){
            showInfo({
                name: resp.name,
                country: resp.sys.country,
                temp: resp.main.temp,
                tempIcon: resp.weather[0].icon,
                windSpeed: resp.wind.speed,
                windAngle: resp.wind.deg
            });
        }else {
            clearHTML();
            showAviso('Não encontramos essa localidade.');
            
        }

    }else {
        clearHTML();
    }

});

function showInfo(obj){
    showAviso('');
    
    document.querySelector('.titulo').innerHTML = `${obj.name}, ${obj.country}`;
    document.querySelector('.tempInfo').innerHTML = `${obj.temp} <sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${obj.windSpeed} <span>km/h</span>`

    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${obj.tempIcon}@2x.png`);
    document.querySelector('.ventoPonto').style.transform = `rotate(${obj.windAngle-90}deg)`;

    document.querySelector('.resultado').style.display = 'block';

}

function clearHTML() {
    showAviso('');
    document.querySelector('.resultado').style.display = 'none';

}

function showAviso(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}