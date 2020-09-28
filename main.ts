function Turn_R_15 (multiplier: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorStop(maqueen.Motors.M2)
    basic.pause(multiplier * 110)
    maqueen.motorStop(maqueen.Motors.M1)
}
/**
 * The pause in Turn L is longer than the pause in Turn R because of the difference in motor speeds. This to achieve turn of 90 degrees. By trail and error.
 */
function Turn_L_15 (multiplier: number) {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.motorStop(maqueen.Motors.M1)
    basic.pause(multiplier * 130)
    maqueen.motorStop(maqueen.Motors.M2)
}
/**
 * Call Turn R 6 times gives a 90 degree turn.
 */
input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    Turn_R_15(6)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    Turn_L_15(6)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
})
