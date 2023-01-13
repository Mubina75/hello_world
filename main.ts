input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    music.playMelody("C D E F G A B C5 ", 120)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    basic.showString("MUBINA!")
    music.playMelody("B A F D F G B C5 ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallHeart)
    music.playMelody("A D C5 G C A F B ", 274)
})
basic.showIcon(IconNames.Giraffe)
