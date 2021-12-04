
let box1 = document.getElementById('box-1');
let box2 = document.getElementById('box-2');
let box3 = document.getElementById('box-3');
let box4 = document.getElementById('box-4');
let box5 = document.getElementById('box-5');
let box6 = document.getElementById('box-6');
let box7 = document.getElementById('box-7');
let box8 = document.getElementById('box-8');
let box9 = document.getElementById('box-9');


function llenandoCasilla(e) {
    e.target.innerHTML = 'X';
}

function posicionJugar(e) {
    e.target.style.backgroundColor = 'lightgrey';
}

function resetPosicion(e) {
    e.target.style.backgroundColor = 'white';
}

box1.onclick = llenandoCasilla;
box1.onmouseover = posicionJugar;
box1.onmouseout = resetPosicion;

box2.onclick = llenandoCasilla;
box2.onmouseover = posicionJugar;
box2.onmouseout = resetPosicion;

box3.onclick = llenandoCasilla;
box3.onmouseover = posicionJugar;
box3.onmouseout = resetPosicion;

box4.onclick = llenandoCasilla;
box4.onmouseover = posicionJugar;
box4.onmouseout = resetPosicion;

box5.onclick = llenandoCasilla;
box5.onmouseover = posicionJugar;
box5.onmouseout = resetPosicion;

box6.onclick = llenandoCasilla;
box6.onmouseover = posicionJugar;
box6.onmouseout = resetPosicion;

box7.onclick = llenandoCasilla;
box7.onmouseover = posicionJugar;
box7.onmouseout = resetPosicion;

box8.onclick = llenandoCasilla;
box8.onmouseover = posicionJugar;
box8.onmouseout = resetPosicion;

box9.onclick = llenandoCasilla;
box9.onmouseover = posicionJugar;
box9.onmouseout = resetPosicion;