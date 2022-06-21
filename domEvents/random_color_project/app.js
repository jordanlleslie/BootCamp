const h1 = document.querySelector('h1')
const body = document.querySelector('body')

const btn = document.querySelector('#change')
btn.addEventListener('click', () => {
    let random1 = Math.floor(Math.random() * 256);
    let random2 = Math.floor(Math.random() * 256);
    let random3 = Math.floor(Math.random() * 256);
    let color = `rgb(${random1}, ${random2}, ${random3})`

    if(random1 + random2 + random3 < 150){
        h1.style.color = "#fff"
    } else {
        h1.style.color = "#000"
    }
    body.style.backgroundColor = color;
    h1.innerText = color;

})