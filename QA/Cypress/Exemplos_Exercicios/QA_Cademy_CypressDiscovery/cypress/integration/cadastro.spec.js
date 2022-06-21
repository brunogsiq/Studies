import signup from '../pages/SignupPage'


describe('Cadastro', () => {



    it('Usuário deve se tornar um intregador', () => {

        var deliver = {
            name: 'Bruno Siqueira',
            cpf: '12345678900',
            email: 'bgs@gmail.com',
            whatsapp: '13123456789',
            address: {
                postalcode: '11050031',
                street: 'Rua Alexandre Herculano',
                number: '140',
                details: 'Apt 17',
                district: 'Gonzaga',
                city_state: 'Santos/SP'
            },
            deliver_method_1: 'Moto',
            deliver_method_2: 'Bicicleta',
            deliver_method_3: 'Van/Carro',
            cnh: 'cnh-digital.jpeg'
        }

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)


    })

    it('Validação de Alerta de erro - CPF', () => {
        var deliver = {
            name: 'Bruno Siqueira',
            cpf: '123456789AB',
            email: 'bgs@gmail.com',
            whatsapp: '13123456789',
            address: {
                postalcode: '11050031',
                street: 'Rua Alexandre Herculano',
                number: '140',
                details: 'Apt 17',
                district: 'Gonzaga',
                city_state: 'Santos/SP'
            },
            deliver_method_1: 'Moto',
            deliver_method_2: 'Bicicleta',
            deliver_method_3: 'Van/Carro',
            cnh: 'cnh-digital.jpeg'
        }

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })
})