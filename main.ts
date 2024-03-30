OLED.init(128, 64)
basic.forever(function () {
    OLED.writeStringNewLine("Temperatura")
    OLED.writeNumNewLine(Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C))
    OLED.drawLoading(Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C))
    OLED.clear()
    basic.showString("altitud")
    basic.showNumber(Environment.octopus_BME280(Environment.BME280_state.BME280_altitude))
    OLED.drawRectangle(
    0,
    0,
    20,
    Environment.octopus_BME280(Environment.BME280_state.BME280_pressure)
    )
    basic.showString("presión")
    basic.showNumber(Environment.octopus_BME280(Environment.BME280_state.BME280_altitude))
})
