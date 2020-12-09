// // rectangle
// // initDraw(document.getElementById('canvas'));

// // document.querySelector(".myShapeBtn").addEventListener("click",initDraw(canvas))


// let myShape =document.querySelector(".myShapeBtn");
// // function initDraw(canvas) {
//     function setMousePosition(e) {
//         var ev = e || window.event; //Moz || IE
//         if (ev.pageX) { //Moz
//             mouse.x = ev.pageX;
//             // console.log("if x "+mouse.x);
//             mouse.y = ev.pageY;
//             // console.log("if y "+mouse.y);
//         }
//     };


//     var mouse = {
//         x: 0,
//         y: 0,
//         startX: 0,
//         startY: 00
//     };
//     var element = null;

//     canvas.onmousemove = function (e) {
//         setMousePosition(e);
//         if (element !== null) {
//             element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
//             element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
//             element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
//             element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
//         }
//     }
    
//     myShape.onclick = function (e) {
//         if (element !== null) {
//             element = null;
//             canvas.style.cursor = "default";
//             console.log("finsihed.");
//         } else {
//             console.log("begun.");
//             mouse.startX = mouse.x;
//             console.log("inside x " + mouse.startX);
//             mouse.startY = mouse.y;
//             console.log("inside y " + mouse.startY);
//             element = document.createElement('div');
//             element.classList.add ( 'rectangle')
//             element.style.left = mouse.x + 'px';
//             element.style.top = mouse.y + 'px';
//             canvas.appendChild(element)
//             canvas.style.cursor = "crosshair";
//         }
//     }
// // }


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let {top : topOffSet} = canvas.getBoundingClientRect();

canvas.height = window.innerHeight-topOffSet;
canvas.width = window.innerWidth;

window.addEventListener("resize",function(){
    canvas.height = window.innerHeight-topOffSet;
    canvas.width = window.innerWidth;
});
// ctx.stroke
    let lmousex = 0;
    let lmousey = 0;
    let fmousex = 0 
    let fmousey = 0;
    let mousedown = false;
    let width = 0;
    let height = 0;

    // ctx.beginPath();

    // ctx.moveTo(10,10);
    // ctx.rect(10,10 , 100 , 150);
    // ctx.stroke();
    // ctx.clearRect(0,0,canvas.width , canvas.height);
    // // ctx.beginPath();
    // ctx.rect(10,10 , 200 , 200);
    // ctx.stroke();




    canvas.addEventListener("mousedown",function(e){
        mousedown = true;
        lmousex = e.x;
        lmousey = e.y;
        console.log(lmousex + " " + lmousey);
        // ctx.moveTo(lmousex, lmousey);
    });
    canvas.addEventListener("mousemove", function(e){
        // ctx.clearRect(0,0,canvas.width,canvas.height);
        if(mousedown){
            ctx.beginPath();
            
            fmousex = e.x;
            fmousey = e.y;
            
            console.log(fmousex + " " + fmousey);
            width = fmousex - lmousex;
            height = fmousey- lmousey;
            
            ctx.clearRect( 0 , 0,canvas.width,canvas.height);
            
            ctx.rect(lmousex,lmousey,width,height);
            ctx.stroke();
            // ctx.strokeStyle = 'black';
            // ctx.lineWidth = 1;
        }
    });
    canvas.addEventListener("mouseup", function(e){
        mousedown = false;
        // ctx.clearRect(0,0,canvas.width,canvas.height);
        // ctx.rect(lmousex,lmousey,width,height);
        // let length = width * width;
        // let breath = height * height;
        // let diameter = Math.sqrt(length + breath);
        // let radius = diameter/2;
        // ctx.arc(lmousex ,lmousey, radius, 0, 2 * Math.PI);
        // ctx.strokeStyle = 'black';
        // ctx.lineWidth = 1;
        // ctx.stroke();
    });






