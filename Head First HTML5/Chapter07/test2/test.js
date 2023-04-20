window.onload = function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(100, 100, 75, degreesToRadians(270), 0, true);
    context.lineWidth = 5;
    context.stroke();
    context.fillStyle = "red";
    // context.fill();
};

function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}
