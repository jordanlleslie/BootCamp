const btn = document.querySelector('button')
btn.onclick = () => console.log('clicked the button')

const h1 = document.querySelector('h1')

function changeColor(obj){
    obj.background = "#ff0000"
}

h1.onclick = () => h1.classList.toggle('red')

const blob = document.querySelector('.blob')
blob.addEventListener('click', () => {
    alert('CLICKED'
    )
})