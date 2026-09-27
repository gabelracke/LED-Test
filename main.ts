/**
 * LED-Streifen kennenlernen
 * 
 * Erweiterung "neopixel" in MakeCode hinzufügen.
 * 
 * Knopf A: Farbe wechseln
 * 
 * Knopf B: eine LED mehr einschalten (höchstens 10)
 * 
 * A+B:    alles aus, von vorne beginnen
 */
input.onButtonPressed(Button.A, function () {
    farbNummer += 1
    if (farbNummer >= farben.length) {
        farbNummer = 0
    }
    zeigen()
})
input.onButtonPressed(Button.AB, function () {
    anzahl = 1
    farbNummer = 0
    zeigen()
})
input.onButtonPressed(Button.B, function () {
    if (anzahl < 10) {
        anzahl += 1
    }
    if (anzahl == 10) {
        anzahl = 1
    }
    zeigen()
})
function zeigen() {
    strip.clear()
    for (let i = 0; i <= anzahl - 1; i++) {
        strip.setPixelColor(i, neopixel.colors(farben[farbNummer]))
    }
    strip.show()
    basic.showNumber(anzahl)
}
let anzahl = 0
let farben: number[] = []
let strip: neopixel.Strip = null
let farbNummer = 0
strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
strip.setBrightness(20)
farben = [
    NeoPixelColors.Red,
    NeoPixelColors.Green,
    NeoPixelColors.Blue,
    NeoPixelColors.Yellow,
    NeoPixelColors.Purple,
    NeoPixelColors.Orange
]
anzahl = 1
zeigen()
