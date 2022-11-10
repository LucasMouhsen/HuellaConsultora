const modal_container = document.getElementById('modal_container');
const modal_container2 = document.getElementById('modal_container2');
const open = document.getElementById('open');
const close = document.getElementById('close');

const open2 = document.getElementById('open2');
const close2 = document.getElementById('close2');

/* Modal 1 */
open.addEventListener('click', () => {
    modal_container.classList.toggle('show');
});

/* Modal 2 */
open2.addEventListener('click', () => {
    modal_container2.classList.toggle('show');
});

/* Servicios */

const modal_container_v1 = document.getElementById('modal_container_v1');
const openv1 = document.getElementById('open_v1');

const modal_container_v2 = document.getElementById('modal_container_v2');
const openv2 = document.getElementById('open_v2');

const modal_container_v3 = document.getElementById('modal_container_v3');
const openv3 = document.getElementById('open_v3');

const modal_container_v4 = document.getElementById('modal_container_v4');
const openv4 = document.getElementById('open_v4');

const modal_container_v5 = document.getElementById('modal_container_v5');
const openv5 = document.getElementById('open_v5');

openv1.addEventListener('click', () => { 
    modal_container_v1.classList.toggle('show');
});
openv2.addEventListener('click', () => { 
    modal_container_v2.classList.toggle('show');
});
openv3.addEventListener('click', () => { 
    modal_container_v3.classList.toggle('show');
});
openv4.addEventListener('click', () => { 
    modal_container_v4.classList.toggle('show');
});
openv5.addEventListener('click', () => { 
    modal_container_v5.classList.toggle('show');
});