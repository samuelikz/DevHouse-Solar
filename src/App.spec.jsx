function converterHms(seconds) {

    if (seconds < 60) {
        return `${seconds}s`
    }

    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    if (minutes < 60) {
        return `${minutes}m ${remainingSeconds}s`
    }

    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60

    return `${hours}h ${remainingMinutes}m ${remainingSeconds}s`

}

describe('Deveria Receber um numero e retornar no formato h_m_s', () => {
    test('Deveria receber o numero 30 e converter no formato 30s', () => {
        const resultado = converterHms(30)
        expect(resultado).toBe('30s')
    })

    test('Deveria receber o numero 350 e converter no formato 5m 50s', () => {
        const resultado = converterHms(350)
        expect(resultado).toBe('5m 50s')
    })

    test('Deveria receber o numero 3725 e converter no formato 1h 2m 5s', () => {
        const resultado = converterHms(3725)
        expect(resultado).toBe('1h 2m 5s')
    })
})