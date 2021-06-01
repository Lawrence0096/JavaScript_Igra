const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnRgb = document.createElement('button')
const btnGray = document.createElement('button')
const btnSize = document.createElement('button')
const section = document.querySelector('.section');
const buttonsContainer = document.querySelector('.buttons');

window.onload = () => {
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => box.addEventListener('mouseover', () =>{
        box.style.background = 'black'
    }))
}

function CreateD (col, row){
    for(let i = 0; i < (col * row); i++){
        const divs = document.createElement('div')
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        container.appendChild(divs).classList.add('box')
    }
}

CreateD(16,16)


function grayColor() {
    const boxs1 = container.querySelectorAll('.box')
    btnGray.textContent = "GRAY"
    btnGray.addEventListener('click', () => {
        boxs1.forEach(box =>box.addEventListener('mouseover', ()=>{
            let MathR = Math.floor(Math.random() * 256);
            let GrayScale = `rgb(${MathR},${MathR},${MathR})`
            box.style.background = GrayScale;
        }))  
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn')
}


grayColor()

function rgbColors() {
    
    const boxs = container.querySelectorAll('.box')
    btnRgb.textContent = "RGB"
    btnRgb.addEventListener('click' ,() => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            const RGB = `rgb(${R},${G},${B})`;
            box.style.background = RGB;
        }))
    })
    buttonsContainer.appendChild(btnRgb).classList.add('btn')
}
rgbColors()

function blackColor() {
   
    const boxs = container.querySelectorAll('.box')
    btnBlack.textContent = 'BLACK';
    btnBlack.addEventListener('click', function () {
        boxs.forEach(box => box.addEventListener('mouseover', function() {
            this.style.background = 'black'
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn')
}
blackColor() 
