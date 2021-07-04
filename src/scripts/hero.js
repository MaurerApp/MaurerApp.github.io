

const heroElement = document.getElementById("hero")
heroElement.addEventListener("mousemove", moveMouse)

let lastX, lastY, lastD, lastDx, lastDy

reset()
window.onresize = function () {
    reset()
}



function reset() {
    lastX = 0
    lastY = 0
    lastD = 0
    lastDx = 0
    lastDy = 0
}

function moveMouse(e) {

    lastD += Math.sqrt(
        Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2)
    );

    lastX = e.clientX;
    lastY = e.clientY;

    console.log(lastX, lastY, lastD, lastDx, lastDy)
}