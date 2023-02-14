
const $tiempo = document.querySelector('.tiempo'),
    $fecha = document.querySelector('.fecha');


function digitalClock() {
    let f = new Date(),
        dia = f.getDate(),
        mes = f.getMonth() + 1,
        anio = f.getFullYear(),
        diaSemana = f.getDay();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2)

    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;

    let semana = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let showSemana = (semana[diaSemana]);
    $fecha.innerHTML = `${anio}-${mes}-${dia} ${showSemana}`
}
setInterval(() => {
    digitalClock()
}, 1000);

var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");
var currentStyle = document.getElementById("style");
boton1.addEventListener("click", function () {
    document.body.style.backgroundImage="url('imagenes/desierto.jpg')";
});
boton2.addEventListener("click", function () {
    document.body.style.backgroundImage="url('imagenes/playa.jpg')";
});
boton3.addEventListener("click", function () {
    document.body.style.backgroundImage="url('imagenes/montaña.jpg')";
});

//Modal


const openModal = document.querySelector('.alarma2btn');

const modal = document.querySelector('.modal');

const modal1 = document.querySelector('.reloj');

const closeModal = document.querySelector('#cerrar');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
    /*creado nuevo en EV*/
     modal1.classList.add('reloj--hide');

});


closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
   
    modal1.classList.remove('reloj--hide');

});
// guardar en local Storage 

var alarmhoras = document.getElementById("alarmHrs").value;
var alarmminutos = document.getElementById("alarmMins").value;
var alarmsegundos = document.getElementById("alarmSecs").value;

var alarm = {
    horas: alarmhoras,
    minutos: alarmminutos,
    segundos: alarmsegundos
};

localStorage.setItem("alarm", JSON.stringify(alarm));

var alarmString = localStorage.getItem("alarm");
if (alarmString) {
    var alarm = JSON.parse(alarmString);
    document.getElementById("alarmHrs").value = alarmhoras;
    document.getElementById("alarmMins").value = alarmminutos;
    document.getElementById("alarmSecs").value = alarmsegundos;
}

function mostrarAlarma() {
    var container = document.createElement('div');
    container.innerHTML = '<h2>La Alarma sonará : </h2>' + 
    document.getElementById("alarmHrs").value + ':'+
     document.getElementById("alarmMins").value + ':'+
     document.getElementById("alarmSecs").value;
                       
    document.body.appendChild(container);
  }
  
  // Llamamos a la función para mostrar la información de la alarma
 
console.log(alarmHrs);
//MODAL ALARMA 
window.addEventListener("load", buildIt);

window.onload = function () {
    // Retrieve the alarm string from local storage
    var alarmString = localStorage.getItem("alarm");

    // If the alarm string exists in local storage, parse it into an object
    if (alarmString) {
        var alarm = JSON.parse(alarmString);

        // Initialize the alarm time and message in the modal
        document.getElementById("alarmHrs").value = alarmhoras;
        document.getElementById("alarmMins").value = alarmminutos;
        document.getElementById("alarmSecs").value = alarmsegundos;
    }
};

var saveAlarm = function () {

    document.getElementById("alarmHrs").value = alarmhoras;
    document.getElementById("alarmMins").value = alarmminutos;
    document.getElementById("alarmSecs").value = alarmsegundos;
}


console.log(alarmString);
console.log(saveAlarm);

function buildIt() {
    startTime();
    hrsMenu();
    minsMenu();
    secsMenu();
    soundMenu();
    buildAudio();
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var time = checkZero(h) + ":" + checkZero(m) + ":" + checkZero(s);
    document.getElementById("time").innerHTML =
        time;
    var t = setTimeout(startTime, 500);
}

function checkZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}

function hrsMenu() {
    var select = document.getElementById("alarmHrs");
    var hours = 23;

    for (i = 0; i <= hours; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}

function minsMenu() {
    var select = document.getElementById("alarmMins");
    var mins = 59;

    for (i = 0; i <= mins; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}

function secsMenu() {
    var select = document.getElementById("alarmSecs");
    var secs = 59;

    for (i = 0; i <= secs; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}

function soundMenu() {
    var select = document.getElementById("mySelect");

    var array = [
        {
            name: "Birds",
            url: "https://www.freespecialeffects.co.uk/soundfx/various/forest.wav"
        },
        {
            name: "Morning",
            url: "https://www.freespecialeffects.co.uk/soundfx/computers/goodmorningfemale.wav"
        },
        {
            name: "Bells",
            url: "https://www.freespecialeffects.co.uk/soundfx/bells/church_bells_01.wav"
        }
    ];

    for (var i = 0; i < array.length; i++) {

        var option = document.createElement("option");
        option.value = array[i].url;
        option.text = array[i].name;
        select.appendChild(option);
    }
}

function buildAudio() {
    var myDiv = document.getElementById("myDiv");
    var myAudio = document.createElement("audio");

    myAudio.src = "https://www.freespecialeffects.co.uk/soundfx/various/forest.wav";
    myAudio.id = "myAudio";
    myDiv.appendChild(myAudio);
}

document.getElementById("mySetButton").addEventListener("click", setAlarm);
document.getElementById("myClearButton").addEventListener("click", clearAlarm);
document.getElementById("mySelect").addEventListener("change", getSrc);

function getSrc() {
    document.getElementById("myAudio").src = document.getElementById("mySelect").value;
}


function setAlarm() {

    var hour = document.getElementById("alarmHrs");
    var min = document.getElementById("alarmMins");
    var sec = document.getElementById("alarmSecs");

    var selectedHour = hour.options[hour.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;

    var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec);

    document.getElementById('alarmHrs').disabled = true;
    document.getElementById('alarmMins').disabled = true;
    document.getElementById('alarmSecs').disabled = true;
    document.getElementById('mySelect').disabled = true;


    setInterval(function playAlarmSound() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var time = addZero(h) + ":" + addZero(m) + ":" + addZero(s);

        if (time == alarmTime) {
            myAudio.play();
            myAudio.loop = true;
        }
    }, 1000);
}

function addZero(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

function clearAlarm() { 
    document.getElementById("alarmHrs").disabled = false;
    document.getElementById("alarmMins").disabled = false;
    document.getElementById("alarmSecs").disabled = false;
    document.getElementById("mySelect").disabled = false;
    document.getElementById("myAudio").disabled = false;
    myAudio.pause();
}
