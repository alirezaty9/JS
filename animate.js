let square= document.getElementById('square')
let deg=0

requestAnimationFrame(sayhello)

 function sayhello(){
    deg+=1
    square.style.transform=`rotate( ${deg}deg)`
    requestAnimationFrame(sayhello)
}

