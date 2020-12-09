//Canvas
// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

// //Variables
// // let {top : topOffSet} = canvas.getBoundingClientRect();
// canvas.height = window.innerHeight
// canvas.width = window.innerWidth;

// window.addEventListener("resize",function(){
//     canvas.height = window.innerHeight - 8;
//     canvas.width = window.innerWidth - 8;
// })



// var canvasx = $(canvas).offset().left;
var canvasx = window.pageXOffset;
// console.log(canvasx);
// var canvasy = $(canvas).offset().top;
var canvasy = window.pageYOffset;
// console.log(canvasy);
let last_mousex = 0;
let last_mousey = 0;
var mousex = mousey = 0;
var mousedown = true;

// //Mousedown
// $(canvas).on('mousedown', function(e) {
//     last_mousex = parseInt(e.clientX-canvasx);
// 	last_mousey = parseInt(e.clientY-canvasy);
    // mousedown = true;
// });

canvas.addEventListener("mousedown",function(e){
    let mylast_mousex = parseInt(e.clientX-canvasx);
    console.log(mylast_mousex);
    let mylast_mousey = parseInt(e.clientY-canvasy);
    console.log(mylast_mousey);
    mousedown = true;
    last_mousex = mylast_mousex;
    last_mousey = mylast_mousey  
})

canvas.addEventListener("mouseup",function(e){
    mousedown = false;
})

canvas.addEventListener("mousemove",function(e){
    mousex = parseInt(e.clientX-canvasx);
    mousey = parseInt(e.clientY-canvasy);
        if(mousedown) {
            ctx.clearRect(0,0,canvas.width,canvas.height); //clear canvas
            ctx.beginPath();
            var width = mousex-last_mousex;
            var height = mousey-last_mousey;

            ctx.rect(last_mousex,last_mousey,width,height);
            // console.log(last_mousex);
            // console.log(last_mousey);
            // console.log(width);
            // console.log(height);
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 3;
            ctx.stroke();
        }

})

// //Mouseup
// $(canvas).on('mouseup', function(e) {
//     mousedown = false;
// });

// //Mousemove
// $(canvas).on('mousemove', function(e) {
//     mousex = parseInt(e.clientX-canvasx);
// 	mousey = parseInt(e.clientY-canvasy);
//     if(mousedown) {
//         ctx.clearRect(0,0,canvas.width,canvas.height); //clear canvas
//         ctx.beginPath();
//         var width = mousex-last_mousex;
//         var height = mousey-last_mousey;
//         ctx.rect(last_mousex,last_mousey,width,height);
//         ctx.strokeStyle = 'black';
//         ctx.lineWidth = 3;
//         ctx.stroke();
//     }
// });