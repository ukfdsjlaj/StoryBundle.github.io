const house = [
    {
        label: "GALLERY",
        link: "gallery.html",
        x: 2 * GAME_TILE,
        y: 2 * GAME_TILE,
        w: 2 * GAME_TILE,
        h: 2 * GAME_TILE
    },
    {
        label: "STORY",
        link: "story.html",
        x: 7 * GAME_TILE,
        y: 4 * GAME_TILE,
        w: 2 * GAME_TILE,
        h: 2 * GAME_TILE
    },
    {
        label: "ASK_US",
        link: "ask_us.html",
        x: 3 * GAME_TILE,
        y: 6 * GAME_TILE,
        w: 3 * GAME_TILE,
        h: 2 * GAME_TILE
    }
]

canvas.addEventListener("mousemove", function (e) {
    
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    const mushHouse = house[0];
    const rhouse = house[1];
    const ghouse = house[2];

    let hovering = false;

    ctx.imageSoomthingEnabled = false;

    // Redraw entire scene
    drawScene();
    

    // By default, draw all houses without offset
    let mushroomOffset = 0;
    let redOffset = 0;
    let greenOffset = 0;

    // Apply bounce offset if mouse is hovering
    if (mouseX >= mushHouse.x && mouseX <= mushHouse.x + mushHouse.w &&
        mouseY >= mushHouse.y && mouseY <= mushHouse.y + mushHouse.h) {
        mushroomOffset = -3;
        hovering = true;
    }

    if (mouseX >= rhouse.x && mouseX <= rhouse.x + rhouse.w &&
        mouseY >= rhouse.y && mouseY <= rhouse.y + rhouse.h) {
        redOffset = -3;
        hovering = true;
    }

    if (mouseX >= ghouse.x && mouseX <= ghouse.x + ghouse.w &&
        mouseY >= ghouse.y && mouseY <= ghouse.y + ghouse.h) {
        greenOffset = -3;
        hovering = true;
    }

    // Draw each house with its respective offset
    mushroomHouse(0, mushroomOffset);
    redHouse(0, redOffset);
    greenHouse(0, greenOffset);

    // Re-draw floorbed or other foreground props if needed
    ctx.drawImage(TILE_PROP, 2 * IMAGE_TILE, 0 * IMAGE_TILE, IMAGE_TILE, IMAGE_TILE, 4 * GAME_TILE - 7, 8 * GAME_TILE - 7, GAME_TILE, GAME_TILE);
    // Path
    ctx.drawImage(ROAD,0,0);
    canvas.style.cursor = hovering ? "pointer" : "default";
});

canvas.addEventListener("click", function (e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    for (let h of house) {
        if (
            mouseX >= h.x && mouseX <= h.x + h.w &&
            mouseY >= h.y && mouseY <= h.y + h.h
        ) {
            window.location.href = h.link;
            return;
        }
    }
});




