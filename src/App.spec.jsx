describe('Jest', () => {
    it('testing jest', () => {
        expect(4+4).toBe(8);
    });
});

describe('App', () => {
    test('Deveria retornar 2 quando somo 1 + 1', () =>{
        const soma = 1+1
        expect(soma).toBe(2)
    });
});

function somar(num1,num2){
    return num1 + num2
};

describe('Soma de numeros valor: num1 + num2', () => {
    test('Deveria retornar o resultado de 2 + 2 = 4', () => {
        const resultado = somar(2,2)
        expect(resultado).toBe(4)
    });

    test('Resultado de 5+5 deve dar o resultado = 10', () =>{
        const resultado2 = somar(5,5)
        expect(resultado2).toBe(10)
    });
});

function transformeStringInObject(text){

    const quantidadeCaracter = text.length
    const primeiroCaracter = text[0]
    const ultimoCaracter = text[text.length -1]

    return {
        quantidadeCaracter: quantidadeCaracter,
        primeiroCaracter: primeiroCaracter,
        ultimoCaracter: ultimoCaracter
    }
}

describe('Transfomar um objeto com as informações corretas como tamanho, primeiro, e ultimo caractere', () => {

    test('Deveria retornar um objeto', () => {

        const resultado = transformeStringInObject('Samuel')
    
        expect(resultado).toEqual({
            quantidadeCaracter: 6,
            primeiroCaracter: 'S',
            ultimoCaracter: 'l'
        })
    })
})

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