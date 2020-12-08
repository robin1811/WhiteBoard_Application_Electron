// rectangle
// initDraw(document.getElementById('canvas'));

// document.querySelector(".myShapeBtn").addEventListener("click",initDraw(canvas))


let myShape =document.querySelector(".myShapeBtn");
// function initDraw(canvas) {
    function setMousePosition(e) {
        var ev = e || window.event; //Moz || IE
        if (ev.pageX) { //Moz
            mouse.x = ev.pageX;
            // console.log("if x "+mouse.x);
            mouse.y = ev.pageY;
            // console.log("if y "+mouse.y);
        }
    };


    var mouse = {
        x: 0,
        y: 0,
        startX: 0,
        startY: 0
    };
    var element = null;

    canvas.onmousemove = function (e) {
        setMousePosition(e);
        if (element !== null) {
            element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
            element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
            element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
            element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
        }
    }
    
    myShape.onclick = function (e) {
        if (element !== null) {
            element = null;
            canvas.style.cursor = "default";
            console.log("finsihed.");
        } else {
            console.log("begun.");
            mouse.startX = mouse.x;
            console.log("inside x " + mouse.startX);
            mouse.startY = mouse.y;
            console.log("inside y " + mouse.startY);
            element = document.createElement('div');
            element.classList.add ( 'rectangle')
            element.style.left = mouse.x + 'px';
            element.style.top = mouse.y + 'px';
            canvas.appendChild(element)
            canvas.style.cursor = "crosshair";
        }
    }
// }