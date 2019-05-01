// Configuration du jeu :
let config = {
    type: Phaser.AUTO,
    backgroundColor: "#ccccff",
    width: 800,
    height: 600,
    scene: {
        preload: preload,   // Le preload charge les données avant le lancement du jeu.
        create: create,     // Le create permet de créer les objets sur la scène.
        update: update      // L'update permet de mettres les objets en mouvement.
    },
    physics: {
        default : "arcade",
        arcade : {
            gravity : {y:500}
        }
    }
}

const game = new Phaser.Game(config);