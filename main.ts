input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    music.playMelody("G B A G C5 B A B ", 120)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    basic.showString("MUBINA!")
    music.playMelody("B A F D F G B C5 ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallHeart)
    music.playMelody("E D G F B A C5 B ", 274)
})
basic.showIcon(IconNames.Giraffe)
