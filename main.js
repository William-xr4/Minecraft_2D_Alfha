var canvas =new fabric.Canvas("canvas");
var altura_do_jogador = 180;
var largura_do_jogador = 190;
var pos_x = 10;
var pos_y = 10;
var altura_do_bloco = 80;
var largura_do_bloco = 80;
var objeto_do_jogador="";
var objeto_do_bloco="";

function atualiza_jogador(){
    fabric.Image.fromURL("player.png", function(img){
        objeto_do_jogador =img;
        objeto_do_jogador.scaleToWidth(largura_do_jogador);
        objeto_do_jogador.scaleToHeight(altura_do_jogador);
        objeto_do_jogador.set({
            top:pos_y,
            left:pos_x
        });
        canvas.add(objeto_do_jogador);
    });
}

function atualiza_bloco(pegar_img){
    fabric.Image.fromURL(pegar_img, function(img){
        objeto_do_bloco =img;
        objeto_do_bloco.scaleToWidth(largura_do_bloco);
        objeto_do_bloco.scaleToHeight(altura_do_bloco);
        objeto_do_bloco.set({
            top:pos_y,
            left:pos_x
        });
        canvas.add(objeto_do_bloco);
    });
}

window.addEventListener("keydown", Tecla_pressionada);

function Tecla_pressionada(evento){
    var tecla  =evento.keyCode;
    console.log(tecla);
    if(tecla=="80" & evento.shiftKey){
        console.log("p e shift foram pressionadas");
        largura_do_bloco = largura_do_bloco+10;
        altura_do_bloco = altura_do_bloco+10;
        document.getElementById("largura").innerHTML=largura_do_bloco;
        document.getElementById("altura").innerHTML=altura_do_bloco;
    }
    if(tecla=="77" && evento.shiftKey){
        console.log("m e shift foram pressionadas");
        largura_do_bloco = largura_do_bloco-10;
        altura_do_bloco = altura_do_bloco-10;
        document.getElementById("largura").innerHTML=largura_do_bloco;
        document.getElementById("altura").innerHTML=altura_do_bloco;
    }
    if(tecla=="37"){
        esquerda();
        console.log("esquerda");
    }
    if(tecla=="38"){
        cima();
        console.log("cima");
    }
    if(tecla=="39"){
        direita();
        console.log("direita");
    }
    if(tecla=="40"){
        baixo();
        console.log("baixo");
    }

    if(tecla=="84"){
        atualiza_bloco("brick.jpg");
        console.log("t foi pressionada");
    }
    if(tecla=="69"){
        atualiza_bloco("earth.png");
        console.log("e foi pressionada");
    }
    if(tecla=="67"){
        atualiza_bloco("earth_light.png");
        console.log("c foi pressionada");
    }
    if(tecla=="68"){
        atualiza_bloco("earth_dark.png");
        console.log("d foi pressionada");
    }
    if(tecla=="90"){
        atualiza_bloco("moss.jpeg");
        console.log("z foi pressionada");
    }
    if(tecla=="78"){
        atualiza_bloco("netherrack.png");
        console.log("n foi pressionada");
    }
    if(tecla=="66"){
        atualiza_bloco("netherrack_brick.jpeg");
        console.log("b foi pressionada");
    }
    if(tecla=="80"){
        atualiza_bloco("stone.jpg");
        console.log("p foi pressionada");
    }
    if(tecla=="77"){
        atualiza_bloco("trunk.jpg");
        console.log("m foi pressionada");
    }
    if(tecla=="65"){
        atualiza_bloco("yellow_brick.png");
        console.log("a foi pressionada");
    }
    if(tecla=="71"){
        atualiza_bloco("glow_stone.png");
        console.log("g foi pressionada");
    }
    if(tecla=="70"){
        atualiza_bloco("leaf.png");
        console.log("f foi pressionada");
    }
    if(tecla=="86"){
        atualiza_bloco("glass.png");
        console.log("v foi pressionada");
    }
    if(tecla=="88"){
        atualiza_bloco("netherrack_carmesim.png");
        console.log("x foi pressionada");
    }
    if(tecla=="82"){
        atualiza_bloco("trunk_refined.jpg");
        console.log("r foi pressionada");
    }
    if(tecla=="73"){
        atualiza_bloco("trunk_refined_acacia.jpeg");
        console.log("i foi pressionada");
    }
    if(tecla=="83"){
        atualiza_bloco("ice_compacted.webp");
        console.log("s foi pressionada");
    }
    if(tecla=="72"){
        atualiza_bloco("trunk_acacia.png");
        console.log("h foi pressionada");
    }
    if(tecla=="87"){
        atualiza_bloco("netherrite_block.jpg");
        console.log("w foi pressionada");
    }
}
function esquerda(){
    if(pos_x>0){
        pos_x =pos_x-largura_do_bloco;
        console.log("largura da imagem do bloco = "+largura_do_bloco);
        console.log("Quando a tecla direcional esquerda for pressionada x = "+pos_x+" e y = "+pos_y);
        canvas.remove(objeto_do_jogador);
        atualiza_jogador();
    }
}
function cima(){
    if(pos_y>=0){
        pos_y =pos_y-altura_do_bloco;
        console.log("altura da imagem do bloco = "+altura_do_bloco);
        console.log("Quando a tecla direcional cima for pressionada x = "+pos_x+" e y = "+pos_y);
        canvas.remove(objeto_do_jogador);
        atualiza_jogador();
    }
}
function direita(){
    if(pos_x<=810){
        pos_x =pos_x+largura_do_bloco;
        console.log("largura da imagem do bloco = "+largura_do_bloco);
        console.log("Quando a tecla direcional direita for pressionada x = "+pos_x+" e y = "+pos_y);
        canvas.remove(objeto_do_jogador);
        atualiza_jogador();
    }
}
function baixo(){
    if(pos_y<=420){
        pos_y =pos_y+altura_do_bloco;
        console.log("altura da imagem do bloco = "+altura_do_bloco);
        console.log("Quando a tecla direcional cima for pressionada x = "+pos_x+" e y = "+pos_y);
        canvas.remove(objeto_do_jogador);
        atualiza_jogador();
    }
}