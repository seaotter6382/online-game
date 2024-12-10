let player = null;
function getPlayer() {
    player = document.getElementById("player");
    gameLoop();
}
let speed = 3;
let keys = {};
let pos = {x: 0, y: 0};

document.addEventListener("keydown", (event) => {
    keys[event.key] = true;
});

document.addEventListener("keyup", (event) => {
    delete keys[event.key];
});

function gameLoop() {
    if (player) {
        if (keys['a']) { pos.x -= speed; }
        if (keys['w']) { pos.y -= speed; }
        if (keys['s']) { pos.y += speed; }
        if (keys['d']) { pos.x += speed; }
        player.style.left = pos.x + "px";
        player.style.top = pos.y + "px";
        requestAnimationFrame(gameLoop);
    }
}
getPlayer();
