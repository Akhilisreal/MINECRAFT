var canvas = new fabric.Canvas("myCanvas");

var player_x = 10;
var player_y = 10;

var block_image_width = 30;
var block_image_height = 30;

var player_object = "empty";
var block_image_object = "empty";

function player_update() {
    fabric.Image.fromURL("player.png", function(img) {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(img) {
        block_image_object = img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (e.shiftKey == true && keypressed == "80") {
        console.log("p and shift key pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (e.shiftKey == true && keypressed == "77") {
        console.log("m and shift key pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (keypressed == "87") {
        up();
        console.log("w was pressed");
    }

    if (keypressed == "83") {
        down();
        console.log("s was pressed");
    }

    if (keypressed == "65") {
        left();
        console.log("a was pressed");
    }

    if (keypressed == "68") {
        right();
        console.log("d was pressed");
    }

    if (keypressed == "67") {
        new_image("cloud.jpg");
        console.log("c was pressed");
    }

    if (keypressed == "86") {
        new_image("dark_green.png");
        console.log("v was pressed");
    }

    if (keypressed == "71") {
        new_image("ground.png");
        console.log("g was pressed");
    }

    if (keypressed == "76") {
        new_image("light_green.png");
        console.log("l was pressed");
    }

    if (keypressed == "82") {
        new_image("roof.jpg");
        console.log("r was pressed");
    }

    if (keypressed == "84") {
        new_image("trunk.jpg");
        console.log("t was pressed");
    }

    if (keypressed == "85") {
        new_image("unique.png");
        console.log("u was pressed");
    }

    if (keypressed == "81") {
        new_image("wall.jpg");
        console.log("q was pressed");
    }

    if (keypressed == "89") {
        new_image("yellow_wall.png");
        console.log("y was pressed");
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log(player_y, player_x);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_image_height;
        console.log(player_y, player_x);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 950) {
        player_x = player_x + block_image_height;
        console.log(player_y, player_x);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_image_height;
        console.log(player_y, player_x);
        canvas.remove(player_object);
        player_update();
    }
}