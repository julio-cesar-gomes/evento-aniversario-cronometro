AOS.init();

const dataDoEvento = new Date("Dec 28, 2023 13:35:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaTempo = setInterval(function(){
    const tempoAtual = new Date();
    const timeStampTempoAtual = tempoAtual.getTime();

    const distanciaParaOEvento = timeStampDoEvento - timeStampTempoAtual

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs =  1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const  diasAteOEvento = Math.floor(distanciaParaOEvento / diasEmMs);
    const  horasAteOEvento = Math.floor((distanciaParaOEvento % diasEmMs) / horasEmMs);
    const  minutosAteOEvento = Math.floor((distanciaParaOEvento % horasEmMs) / minutosEmMs);
    const  segundosAteOEvento = Math.floor((distanciaParaOEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if(diasAteOEvento < 0 ){
        clearInterval(contaTime);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
    
},1000)