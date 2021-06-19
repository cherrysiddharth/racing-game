var car_canvas=document.getElementById('amazing_canvas');
ctx=car_canvas.getContext("2d")
car_width=100;
car_height=90;rover
background_image="racing.gif";
car_image="car1.png";
car_x=10;
car_y=10;
car2_image="images.png";
car2_x=10;
car2_y=10;
function add(){
    background_img_tag=new Image();
background_img_tag.onload= uploadbackground;
background_img_tag.src=background_image;
car_img_tag=new Image();
car_img_tag.onload= uploadrover;
car_img_tag.src=rover_image;

}
function uploadbackground(){
    ctx.drawImage(background_img_tag,0,0,car_canvas.width,car_canvas.height);
    
}
function uploadbackrover(){
    ctx.drawImage(car_img_tag,car_x,car_y,car_width,car_height);
    ctx.drawImage(car2_img_tag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38'){
        up();
        console.log("up");

    }
    if(keypressed=='40'){
        down();
        console.log("udown");
        
    }
    if(keypressed=='37'){
        left();
        console.log("left");
        
    }
    if(keypressed=='39'){
        right();
        console.log("right");
        
    }
}