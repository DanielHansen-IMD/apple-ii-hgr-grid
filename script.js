let cont = document.querySelector('.grid-box');
let gridon = document.querySelector('.grid-toggle');

gridon.addEventListener('click', toggleGrid);

function toggleGrid() { 
    cont.classList.toggle('show-grid');
}

for(let i=0; i < 53760; i++) {
    let y = Math.floor(i/280);
    let x = Math.round(((i / 280) - y) * 280);
    cont.insertAdjacentHTML('beforeend', `<div class="grid-item"><span class="tooltip">${x}, ${y}</span></div>`);
}
