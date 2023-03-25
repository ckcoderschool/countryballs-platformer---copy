namespace SpriteKind {
    export const springanim = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Polandball.vy = -200
})
function create_spring () {
    spring_1 = sprites.create(assets.image`Spring 2`, SpriteKind.springanim)
    spring_2 = sprites.create(assets.image`Spring 2`, SpriteKind.springanim)
    spring_3 = sprites.create(assets.image`Spring 2`, SpriteKind.springanim)
    spring_4 = sprites.create(assets.image`Spring 2`, SpriteKind.springanim)
    spring_5 = sprites.create(assets.image`Spring 2`, SpriteKind.springanim)
    spring_6 = sprites.create(assets.image`Spring 2`, SpriteKind.springanim)
    spring_7 = sprites.create(assets.image`Spring 2`, SpriteKind.springanim)
    spring_8 = sprites.create(assets.image`Spring 2`, SpriteKind.springanim)
    spring_9 = sprites.create(assets.image`Spring 2`, SpriteKind.springanim)
    spring_10 = sprites.create(assets.image`Spring 2`, SpriteKind.springanim)
    spring_11 = sprites.create(assets.image`Spring 2`, SpriteKind.springanim)
    spring_12 = sprites.create(assets.image`Spring 2`, SpriteKind.springanim)
    spring_13 = sprites.create(assets.image`Spring 2`, SpriteKind.springanim)
    spring_14 = sprites.create(assets.image`Spring 2`, SpriteKind.springanim)
    spring_15 = sprites.create(assets.image`Spring 2`, SpriteKind.springanim)
    spring_16 = sprites.create(assets.image`Spring 2`, SpriteKind.springanim)
    spring_17 = sprites.create(assets.image`Spring 2`, SpriteKind.springanim)
    spring_18 = sprites.create(assets.image`Spring 2`, SpriteKind.springanim)
    spring_19 = sprites.create(assets.image`Spring 2`, SpriteKind.springanim)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Coin`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (level_tracker != 0) {
        animation.runImageAnimation(
        Polandball,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . f 2 2 2 2 2 f . . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . . f 2 f f 2 f f 2 f . . . . 
            . . . f 2 f f 2 f f 2 f . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . f 1 1 1 1 1 1 1 f . . . . 
            . . . . f 1 1 1 1 1 f . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f 2 2 2 2 2 2 2 f . . . 
            . . . f 2 2 2 2 2 2 2 2 2 f . . 
            . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
            . . f 2 2 f f f 2 f f f 2 2 f . 
            . . f 2 2 f 1 f 2 f 1 f 2 2 f . 
            . . f 2 2 f f f 2 f f f 2 2 f . 
            . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
            . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
            . . f 1 1 1 1 1 1 1 1 1 1 1 f . 
            . . . f 1 1 1 1 1 1 1 1 1 f . . 
            . . . . f 1 1 1 1 1 1 1 f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        false
        )
    } else {
        Polandball.vy = 0
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Polandball.vx = -100
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    Polandball.vx = 0
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    Polandball.vx = 0
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    level_tracker = 0
    tiles.setCurrentTilemap(tilemap`world 1`)
    Polandball.ay = 0
    tiles.placeOnTile(Polandball, tiles.getTileLocation(7, 2))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Spring`, function (sprite, location) {
	
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Polandball.vx = 100
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    Polandball.vy = 0
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (level_tracker == 0) {
        Polandball.vy = 100
    } else {
        Polandball.setImage(assets.image`polandball squish`)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.placeOnTile(Polandball, tiles.getTileLocation(5, 5))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.springanim, function (sprite, otherSprite) {
    Polandball.vy = -550
    animation.runImageAnimation(
    Spring,
    assets.animation`spring bounce animation`,
    100,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    if (location.column == 4 && location.row == 4) {
        level_tracker = 2
        tiles.setCurrentTilemap(tilemap`level 2`)
        create_spring()
        Spring.setPosition(85, 6)
        Polandball.ay = 400
        sprites.destroy(spring_9)
        sprites.destroy(spring_8)
        sprites.destroy(spring_7)
        sprites.destroy(spring_6)
        sprites.destroy(spring_5)
        sprites.destroy(spring_4)
        sprites.destroy(spring_3)
        sprites.destroy(spring_10)
        sprites.destroy(spring_11)
        sprites.destroy(spring_12)
        sprites.destroy(spring_13)
        sprites.destroy(spring_14)
        sprites.destroy(spring_15)
        sprites.destroy(spring_16)
        sprites.destroy(spring_17)
        sprites.destroy(spring_18)
        sprites.destroy(spring_19)
    } else if (location.column == 7 && location.row == 1) {
        sprites.destroy(Spring)
        tiles.setCurrentTilemap(tilemap`level1`)
        level_tracker = 1
        Polandball.ay = 400
    } else if (location.column == 4 && location.row == 7) {
        create_spring()
        tiles.setCurrentTilemap(tilemap`level3`)
        level_tracker = 3
        Polandball.ay = 400
    } else {
    	
    }
})
let Spring: Sprite = null
let spring_19: Sprite = null
let spring_18: Sprite = null
let spring_17: Sprite = null
let spring_16: Sprite = null
let spring_15: Sprite = null
let spring_14: Sprite = null
let spring_13: Sprite = null
let spring_12: Sprite = null
let spring_11: Sprite = null
let spring_10: Sprite = null
let spring_9: Sprite = null
let spring_8: Sprite = null
let spring_7: Sprite = null
let spring_6: Sprite = null
let spring_5: Sprite = null
let spring_4: Sprite = null
let spring_3: Sprite = null
let spring_2: Sprite = null
let spring_1: Sprite = null
let Polandball: Sprite = null
let level_tracker = 0
info.setScore(0)
level_tracker = 1
scene.setBackgroundColor(9)
Polandball = sprites.create(assets.image`Polandball`, SpriteKind.Player)
Polandball.ay = 400
scene.cameraFollowSprite(Polandball)
tiles.setCurrentTilemap(tilemap`level1`)
