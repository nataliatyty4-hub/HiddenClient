const canvas = document.getElementById("particles")

const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let p=[]

for(let i=0;i<100;i++){

p.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2

})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

p.forEach(a=>{

ctx.fillStyle="#00aaff"

ctx.beginPath()

ctx.arc(a.x,a.y,a.r,0,Math.PI*2)

ctx.fill()

a.y+=0.3

if(a.y>canvas.height) a.y=0

})

requestAnimationFrame(draw)

}

draw()
