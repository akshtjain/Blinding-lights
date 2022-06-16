const table = document.getElementById('circleGrid');


for(var i =0; i<3; i++){
    let tableRow = document.createElement('tr');
    for(var j = 0; j<3; j++){
        let tableCell = document.createElement('td');
        tableCell.innerHTML = "<td><div class = \"circle\"></div></td>";
        tableCell.firstChild.setAttribute('id','circle'+(i*3+j));
        tableRow.appendChild(tableCell);
    }
    table.appendChild(tableRow);
}

const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    circle.addEventListener('mouseenter', (e)=>{
        e.target.classList.add('hideElement');
    });
    circle.addEventListener('mouseover', (e)=>{
        e.target.classList.add('hideElement');
    });
    circle.addEventListener('mouseleave', (e)=>{
        e.target.classList.remove('hideElement');
    });
});


document.getElementById('body').addEventListener('click', (e)=>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelectorAll('.circle').forEach(circle => circle.style.backgroundColor="#"+randomColor);
});


function mouseOverHandler(e){
    console.log("asdfasd");
    e.target.classList.add('hideElement');
}