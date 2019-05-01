let jeu = {
    scene : null,
    world : world,
    player : player,
    cursors: null,
}

preload = () => {
    jeu.scene = this;
}

create = () => {
    
}

update = (time, delta) => {  
    responsiveGame();
}

responsiveGame = () => {
    let canvas = document.querySelector("canvas");
    let fenetreWidth = window.innerWidth;
    let fenetreHeight = window.innerHeight;
    let ratioWindow = fenetreWidth / fenetreHeight;

    let configRatio = config.width/config.height;

    if(ratioWindow < configRatio){
        canvas.style.width = fenetreWidth + "px";
        canvas.style.height = (fenetreWidth/configRatio) + "px";
    }
    else{
        canvas.style.width = (fenetreHeight * configRatio) + "px";
    }
}