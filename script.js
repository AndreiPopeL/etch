let button = document.createElement('button');
button.textContent = "Reset";
button.addEventListener('click', function() {
    let message = prompt("How many boxes you wanna see?", "Maximum 100");
    function changeGrid() {
        let m = message, k = -1, o = 0, p ="";
        while (++k < m) {
            p += '<div class="row2">'
            for (o = 0; o < m; o++) p += `<div class="cell2"> </div>`
            p += '</div>'

         container.innerHTML = p;
        }
        return changeGrid();
    }
})
document.body.appendChild(button);


let n=16, i=-1, j=0, s='';

while(++i<n) {
  s+= '<div class="row">'
  for(j=0; j<n; j++) s+= `<div class="cell"> </div>`;
  s+= '</div>'
}

container.innerHTML = s;






