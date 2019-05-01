let world = {
    tilemap : null,
    tileset : null,
    downLayer : null,
    worldLayer : null,
    topLayer : null,
    overlapLayer: null,
    positionStart: null,
    positionFin:null,
    score: 0,
    scoreText: null,

    initialiserWorld : function(){
        this.tilemap = jeu.scene.make.tilemap({key: "map"});
        this.tileset = this.tilemap.addTilesetImage("tilesheet","tiles");
        this.downLayer = this.tilemap.createStaticLayer("bot",this.tileset,0,0);
        this.worldLayer = this.tilemap.createStaticLayer("world",this.tileset,0,0);
        this.topLayer = this.tilemap.createStaticLayer("top",this.tileset,0,0);
        this.overlapLayer = this.tilemap.createDynamicLayer("overlap",this.tileset,0,0);

        this.positionStart = this.tilemap.findObject("objects", obj => obj.name === "debut");
        this.positionFin = this.tilemap.findObject("objects", obj => obj.name === "fin");

        this.worldLayer.setCollisionByProperty({collides: true});

        jeu.scene.physics.world.setBounds(0,0,this.tilemap.widthInPixels, this.tilemap.heightInPixels);

        let styleScore = {
            fontSize : "32px",
            color: "#FF00000",
            fontFamily: "Arial"
        }
        this.scoreText = jeu.scene.add.text(16,16,"Score : 0", styleScore);
        this.scoreText.setScrollFactor(0);
    },

    generateCollider : function(){
        jeu.scene.physics.add.collider(jeu.player.aPlayer, this.worldLayer);
        jeu.scene.physics.add.overlap(jeu.player.aPlayer, this.overlapLayer);
    },

    gestionCamera : function(){
        
    },
}