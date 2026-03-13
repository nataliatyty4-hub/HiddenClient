const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top = card.getBoundingClientRect().top;

if(top < window.innerHeight-100){

card.style.opacity = "1";
card.style.transform = "translateY(0)";

}

})

})



function particles(){

const canvas=document.createElement("canvas")

document.getElementById("particles").appendChild(canvas)

const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let p=[]

for(let i=0;i<80;i++){

p.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
s:Math.random()*2

})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

p.forEach(a=>{

ctx.fillStyle="#00aaff"

ctx.beginPath()

ctx.arc(a.x,a.y,a.s,0,Math.PI*2)

ctx.fill()

a.y+=0.2

if(a.y>canvas.height) a.y=0

})

requestAnimationFrame(draw)

}

draw()

}

particles()
