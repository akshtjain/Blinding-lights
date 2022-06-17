function mouseenter(e){
    e.target.style.opacity = '0';
}
function mouseleave(e){
    e.target.style.opacity = '100';
}

document.getElementById('body').addEventListener('click', (e)=>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelectorAll('.circle').forEach(circle => circle.style.backgroundColor="#"+randomColor);
});

